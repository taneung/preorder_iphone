/**
 *
 * @param price number
 * @param prependCurrency  true use ฿
 * @returns
 * EX
 *  1,234,567.89   TH
 */
export function formatPrice(price, prependCurrency = false) {
    const resultNew = Number(price || 0).toLocaleString('th-TH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  
    if (prependCurrency) return ` ฿${resultNew}`
    return resultNew
  }
  