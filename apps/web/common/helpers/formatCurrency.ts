const formatCurrency = (amount: number, currency: string) => {
  const formatter = new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}

export default formatCurrency
