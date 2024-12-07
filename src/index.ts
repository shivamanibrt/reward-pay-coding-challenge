// src/index.ts
import * as fs from 'fs';
import { Data } from './types/dataTypes';
import { formatCurrency, formatPercentage } from './utils/formatters';
import {
  calculateExpenses,
  calculateGrossProfitMargin,
  calculateNetProfitMargin,
  calculateRevenue,
  calculateWorkingCapitalRatio,
} from './utils/calculateMetrics';

// Load and parse the data
const data: Data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

// Perform calculations
const revenue = calculateRevenue(data.data);
const expenses = calculateExpenses(data.data);
const grossProfitMargin = calculateGrossProfitMargin(data.data, revenue);
const netProfitMargin = calculateNetProfitMargin(revenue, expenses);
const workingCapitalRatio = calculateWorkingCapitalRatio(data.data);

// Output the results
console.log(`Revenue: ${formatCurrency(revenue)}`);
console.log(`Expenses: ${formatCurrency(expenses)}`);
console.log(`Gross Profit Margin: ${formatPercentage(grossProfitMargin)}`);
console.log(`Net Profit Margin: ${formatPercentage(netProfitMargin)}`);
console.log(`Working Capital Ratio: ${formatPercentage(workingCapitalRatio)}`);
