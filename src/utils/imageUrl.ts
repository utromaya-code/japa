/** Для локальных путей (images/xxx.jpg) добавляет base URL; внешние URL возвращает как есть */
export function getImageUrl(src: string): string {
  if (src.startsWith('http://') || src.startsWith('https://')) return src
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${src.startsWith('/') ? src.slice(1) : src}`
}
