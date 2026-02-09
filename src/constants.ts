/** Ссылка в Telegram с предзаполненным сообщением для бронирования */
const TELEGRAM_BOOKING_MESSAGE = 'Очень хочу поехать с вами в Японию, забронируйте мне место.'
export const TELEGRAM_BOOKING_LINK = `https://t.me/vsemaya?text=${encodeURIComponent(TELEGRAM_BOOKING_MESSAGE)}`
