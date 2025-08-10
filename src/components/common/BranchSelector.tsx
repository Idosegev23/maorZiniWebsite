"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';

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

interface BranchSelectorProps {
  bankCode?: string; // מספר הבנק שנבחר
  onSelect: (branch: Branch) => void;
  value?: {
    branchCode: string;
    branchName: string;
    branchAddress: string;
  };
}

// פונקציה מתקדמת לפרסור CSV עם טיפול מלא בציטוטים
const parseCSVLine = (line: string): string[] => {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  let i = 0;
  
  while (i < line.length) {
    const char = line[i];
    
    if (char === '"') {
      // טיפול בציטוטים כפולים ""
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
};

const BranchSelector: React.FC<BranchSelectorProps> = ({ bankCode, onSelect, value }) => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [filteredBranches, setFilteredBranches] = useState<Branch[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [useAPI, setUseAPI] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // טעינת הסניפים - דרך API בלבד
  useEffect(() => {
    const loadFromAPI = async () => {
      if (!bankCode) return;
      setIsLoading(true);
      try {
        const response = await fetch(`/api/branches?bankCode=${encodeURIComponent(bankCode)}`);
        const data = await response.json();
        if (data.success) {
          setBranches(data.branches);
          setUseAPI(true);
          console.log('✅ Loaded via API:', data.total, 'branches, source:', data.source);
        } else {
          setBranches([]);
        }
      } catch (e) {
        console.error('API error:', e);
        setBranches([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadFromAPI();
  }, [bankCode]);

  // סגירת הדרופדאון כשלוחצים מחוץ לרכיב
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // סינון הסניפים לפי בנק נבחר וחיפוש
  const availableBranches = useMemo(() => {
    let filtered = branches;
    
    console.log('Total branches:', branches.length);
    console.log('Filtering by bank code:', bankCode);
    
    // סינון לפי בנק
    if (bankCode) {
      filtered = filtered.filter(b => b.bankCode === bankCode);
      console.log('After bank filter:', filtered.length);
    }
    
    // סינון לפי חיפוש
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(b => 
        b.branchName.toLowerCase().includes(term) ||
        b.branchCode.includes(term) ||
        b.city.toLowerCase().includes(term) ||
        b.branchAddress.toLowerCase().includes(term)
      );
      console.log('After search filter:', filtered.length);
    }
    
    const result = filtered.slice(0, 50); // מגביל ל-50 תוצאות
    console.log('Final result:', result.length);
    return result;
  }, [branches, bankCode, searchTerm]);

  const handleSelect = (branch: Branch) => {
    onSelect(branch);
    setIsOpen(false);
    setSearchTerm('');
  };

  const displayValue = value 
    ? `${value.branchCode} - ${value.branchName}`
    : 'בחר סניף...';

  return (
    <div ref={containerRef} className="relative">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border rounded-lg p-2 bg-white cursor-pointer flex items-center justify-between"
      >
        <span className={!value ? 'text-gray-500' : ''}>
          {displayValue}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-50 mt-1">
          {/* חיפוש */}
          <div className="p-2 border-b">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="חפש לפי שם סניף, מספר או עיר..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-2 py-2 border rounded-md text-sm"
                autoFocus
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2 top-2.5"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>
          </div>

          {/* רשימת סניפים */}
          <div className="max-h-60 overflow-y-auto">
            {isLoading ? (
              <div className="p-4 text-center text-gray-500">טוען סניפים...</div>
            ) : availableBranches.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                {searchTerm ? 'לא נמצאו סניפים התואמים לחיפוש' : 
                 bankCode ? 'אין סניפים זמינים לבנק זה' : 'בחר בנק תחילה'}
              </div>
            ) : (
              availableBranches.map((branch, index) => (
                <div
                  key={`${branch.bankCode}-${branch.branchCode}-${index}`}
                  onClick={() => handleSelect(branch)}
                  className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                >
                  <div className="font-medium text-sm">
                    {branch.branchCode} - {branch.branchName}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {branch.branchAddress}, {branch.city}
                  </div>
                  {branch.telephone && (
                    <div className="text-xs text-gray-500 mt-1">
                      טל: {branch.telephone}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {availableBranches.length > 0 && (
            <div className="p-2 text-xs text-gray-500 border-t bg-gray-50">
              מוצגים {availableBranches.length} סניפים
              {availableBranches.length === 50 && ' (מתוך יותר תוצאות)'}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BranchSelector;