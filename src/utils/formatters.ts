/**
 * Format a number as currency
 */
export const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

/**
 * Format percentage with one decimal place
 */
export const formatPercentage = (percentage: number): string => {
  return `${percentage.toFixed(1)}%`;
};
