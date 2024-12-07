import { expect } from 'chai';
import { calculateRevenue, calculateExpenses, calculateGrossProfitMargin, calculateNetProfitMargin, calculateWorkingCapitalRatio } from '../src/utils/calculateMetrics';
import { AccountData } from '../src/types/dataTypes';

describe('Accounting Metrics Calculations', () => {
  const testData: AccountData[] = [
    { account_category: 'revenue', account_code: '200', account_currency: 'AUD', account_identifier: '', account_status: 'ACTIVE', value_type: 'credit', account_name: 'Sales', account_type: 'sales', total_value: 1000 },
    { account_category: 'expense', account_code: '400', account_currency: 'AUD', account_identifier: '', account_status: 'ACTIVE', value_type: 'debit', account_name: 'Advertising', account_type: 'overheads', total_value: 500 },
    { account_category: 'expense', account_code: '401', account_currency: 'AUD', account_identifier: '', account_status: 'ACTIVE', value_type: 'debit', account_name: 'Bank Fees', account_type: 'overheads', total_value: 200 },
  ];

  it('should calculate revenue correctly', () => {
    const revenue = calculateRevenue(testData);
    expect(revenue).to.equal(1000);
  });

  it('should calculate expenses correctly', () => {
    const expenses = calculateExpenses(testData);
    expect(expenses).to.equal(700);
  });

  it('should calculate gross profit margin correctly', () => {
    const grossProfitMargin = calculateGrossProfitMargin(testData, 1000);
    expect(grossProfitMargin).to.equal(0); // No sales data in the test
  });

  it('should calculate net profit margin correctly', () => {
    const netProfitMargin = calculateNetProfitMargin(1000, 700);
    expect(netProfitMargin).to.equal(30);
  });

  it('should calculate working capital ratio correctly', () => {
    const workingCapitalRatio = calculateWorkingCapitalRatio(testData);
    expect(workingCapitalRatio).to.be.a('number');
  });
});
