export function formatPrice(price: number | undefined): string {
    if (price === undefined) return ''
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(price).replace('₽', '').trim()
  }