import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface Branch {
  bankCode: string;
  bankName: string;
  branchCode: string;
  branchName: string;
  branchAddress: string;
  city: string;
  zipCode: string;
  telephone: string;
}

// פונקציה לפרסור CSV מתקדם
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  let i = 0;
  
  while (i < line.length) {
    const char = line[i];
    
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 2;
        continue;
      }
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim().replace(/^"(.*)"$/, '$1'));
      current = '';
    } else {
      current += char;
    }
    i++;
  }
  
  result.push(current.trim().replace(/^"(.*)"$/, '$1'));
  return result;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const bankCode = searchParams.get('bankCode');
    const q = searchParams.get('q') ?? '';
    const limit = parseInt(searchParams.get('limit') || '5000', 10);
    
    // נסיון ראשון: קריאה מ-CKAN DataStore (data.gov.il)
    // תיעוד: https://data.gov.il/api/docs
    // dataset resource_id של טבלת סניפי בנקים (דוגמה): נצטרך לוודא את ה-ID העדכני
    const RESOURCE_ID = '2202bada-4baf-45f5-aa61-8c5bad9646d3';
    const params = new URLSearchParams();
    params.set('resource_id', RESOURCE_ID);
    params.set('limit', String(limit));
    if (q) params.set('q', q);

    // שימוש ב"filters" כדי לסנן שרתית לפי קוד בנק
    if (bankCode) {
      try {
        params.set('filters', JSON.stringify({ Bank_Code: bankCode }));
      } catch {}
    }

    const ckanUrl = `https://data.gov.il/api/3/action/datastore_search?${params.toString()}`;

    let branches: Branch[] = [];
    let usedCKAN = false;
    try {
      const resp = await fetch(ckanUrl, { next: { revalidate: 60 } });
      const data = await resp.json();
      if (data?.success && data?.result?.records?.length) {
        branches = (data.result.records as any[]).map((rec) => ({
          bankCode: String(rec.Bank_Code ?? rec.bank_code ?? rec.bankcode ?? '').trim(),
          bankName: String(rec.Bank_Name ?? rec.bank_name ?? '').trim(),
          branchCode: String(rec.Branch_Code ?? rec.branch_code ?? '').trim(),
          branchName: String(rec.Branch_Name ?? rec.branch_name ?? '').trim(),
          branchAddress: String(rec.Branch_Address ?? rec.branch_address ?? '').trim(),
          city: String(rec.City ?? rec.city ?? '').trim(),
          zipCode: String(rec.Zip_Code ?? rec.zip_code ?? '').trim(),
          telephone: String(rec.Telephone ?? rec.telephone ?? '').trim(),
        })).filter(b => b.bankCode && b.branchCode && b.branchName);
        usedCKAN = branches.length > 0;
      }
    } catch (e) {
      // ניפול חזרה ל-CSV
    }

    // Fallback: אם CKAN לא החזיר נתונים, קרא מה-CSV המקומי
    if (branches.length === 0) {
      const filePath = path.join(process.cwd(), 'public', 'forms', 'bank_branches', 'snifim_he.csv');
      const csvText = await fs.readFile(filePath, 'utf-8');
      const lines = csvText.split('\n');
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        const values = parseCSVLine(line);
        if (values.length >= 9) {
          const branchBankCode = values[0]?.trim();
          const bankName = values[1]?.trim();
          const branchCode = values[2]?.trim();
          const branchName = values[3]?.trim();
          const branchAddress = values[4]?.trim();
          const city = values[5]?.trim();
          const zipCode = values[6]?.trim();
          const telephone = values[8]?.trim();
          if (branchBankCode && bankName && branchCode && branchName) {
            branches.push({
              bankCode: branchBankCode,
              bankName,
              branchCode,
              branchName,
              branchAddress,
              city,
              zipCode,
              telephone,
            });
          }
        }
      }
    }
    
    // סינון לפי בנק ושאילתת q (צד שרת)
    let filtered = branches.filter((b) => !b.branchName.includes('הנהלה') &&
      !b.branchName.includes('פנימי') &&
      !b.branchName.includes('תשלומים') &&
      !b.branchName.includes('ניהול נכסים') &&
      b.branchName !== 'תאגידים' &&
      b.branchName !== 'לקוחות');

    if (bankCode) {
      filtered = filtered.filter((b) => b.bankCode === bankCode);
    }
    if (q) {
      const term = q.toLowerCase();
      filtered = filtered.filter((b) =>
        b.branchName.toLowerCase().includes(term) ||
        b.branchCode.includes(term) ||
        b.city.toLowerCase().includes(term) ||
        b.branchAddress.toLowerCase().includes(term)
      );
    }
    
    console.log(`Returning ${filtered.length} branches for bank code: ${bankCode || 'all'}`);
    
    return NextResponse.json({
      success: true,
      branches: filtered.slice(0, limit),
      total: filtered.length,
      source: branches.length ? (usedCKAN ? 'ckan' : 'csv') : 'none'
    });
    
  } catch (error) {
    console.error('Error in branches API:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to load branches' },
      { status: 500 }
    );
  }
}