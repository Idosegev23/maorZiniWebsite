export interface DepositAccount {
  bankCode: string;
  branch: string;
  account: string;
}

// פרטי חשבון להפקדה לפי חברת הביטוח
export const depositAccountsByInsurance: Record<string, DepositAccount[]> = {
  harel: [{ bankCode: '10', branch: '800', account: '29988119' }],
  clal: [{ bankCode: '10', branch: '800', account: '29555650' }],
  menorah: [{ bankCode: '10', branch: '800', account: '21636108' }],
  more: [
    { bankCode: '20', branch: '631', account: '680726' },
    { bankCode: '12', branch: '60', account: '409310' },
  ],
  phoenix: [{ bankCode: '20', branch: '461', account: '586696' }],
  helman: [{ bankCode: '10', branch: '800', account: '22920657' }],
  psagot: [{ bankCode: '10', branch: '800', account: '29947922' }],
  infinity: [{ bankCode: '10', branch: '800', account: '29665452' }],
};

export function getDepositAccounts(insuranceId?: string): DepositAccount[] {
  if (!insuranceId) return [];
  return depositAccountsByInsurance[insuranceId] ?? [];
}

