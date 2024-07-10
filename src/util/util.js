export const formatCurrency = (value) => {
  const formattedValue = Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(Number(value))

  return formattedValue
}
