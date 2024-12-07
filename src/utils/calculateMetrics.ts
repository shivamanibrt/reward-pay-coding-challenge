// src/utils/calculateMetrics.ts
import { AccountData } from '../types/dataTypes';

/**
 * Calculate Revenue
 */
export const calculateRevenue = (data: AccountData[]): number => {
  return data
    .filter((account) => account.account_category === 'revenue')
    .reduce((acc, curr) => acc + curr.total_value, 0);
};

/**
 * Calculate Expenses
 */
export const calculateExpenses = (data: AccountData[]): number => {
  return data
    .filter((account) => account.account_category === 'expense')
    .reduce((acc, curr) => acc + curr.total_value, 0);
};

/**
 * Calculate Gross Profit Margin
 */
export const calculateGrossProfitMargin = (
  data: AccountData[],
  revenue: number,
): number => {
  const salesValue = data
    .filter(
      (account) =>
        account.account_type === 'sales' && account.value_type === 'debit',
    )
    .reduce((acc, curr) => acc + curr.total_value, 0);
  return (salesValue / revenue) * 100;
};

/**
 * Calculate Net Profit Margin
 */
export const calculateNetProfitMargin = (
  revenue: number,
  expenses: number,
): number => {
  return ((revenue - expenses) / revenue) * 100;
};

/**
 * Calculate Working Capital Ratio
 */
export const calculateWorkingCapitalRatio = (data: AccountData[]): number => {
  const assets = data
    .filter(
      (account) =>
        account.account_category === 'assets' &&
        ['current', 'bank', 'current_accounts_receivable'].includes(
          account.account_type,
        ),
    )
    .reduce(
      (acc, curr) =>
        acc +
        (curr.value_type === 'debit' ? curr.total_value : -curr.total_value),
      0,
    );

  const liabilities = data
    .filter(
      (account) =>
        account.account_category === 'liability' &&
        ['current', 'current_accounts_payable'].includes(account.account_type),
    )
    .reduce(
      (acc, curr) =>
        acc +
        (curr.value_type === 'credit' ? curr.total_value : -curr.total_value),
      0,
    );

  return assets / liabilities;
};
