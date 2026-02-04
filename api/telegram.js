/**
 * Vercel Serverless Function: отправка заявки с лендинга в Telegram.
 *
 * Настройка:
 * 1. Создайте бота в Telegram: @BotFather → /newbot → получите токен.
 * 2. Узнайте chat_id: напишите боту, затем откройте:
 *    https://api.telegram.org/bot<ВАШ_ТОКЕН>/getUpdates
 *    В ответе найдите "chat":{"id": 123456789}.
 * 3. В Vercel: Project → Settings → Environment Variables:
 *    TELEGRAM_BOT_TOKEN = токен бота
 *    TELEGRAM_CHAT_ID = ваш chat_id (число или строка)
 *
 * Деплой: загрузите проект на Vercel (или только папку api через отдельный проект).
 * В лендинге укажите VITE_TELEGRAM_API_URL = https://ваш-проект.vercel.app/api/telegram
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

function escapeForTelegram(text) {
  if (typeof text !== 'string') return ''
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function setCors(res) {
  Object.entries(CORS_HEADERS).forEach(([k, v]) => res.setHeader(k, v))
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    setCors(res)
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    setCors(res)
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    setCors(res)
    console.error('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set')
    return res.status(500).json({
      error: 'Server not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.',
    })
  }

  let body
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {}
  } catch {
    setCors(res)
    return res.status(400).json({ error: 'Invalid JSON' })
  }

  const name = escapeForTelegram(body.name || '—')
  const email = escapeForTelegram(body.email || '—')
  const phone = escapeForTelegram(body.phone || '—')
  const comment = escapeForTelegram(body.comment || '—')

  const text = [
    '🍁 <b>Новая заявка: Путешествие в Японию</b>',
    '',
    `<b>Имя:</b> ${name}`,
    `<b>Email:</b> ${email}`,
    `<b>Телефон:</b> ${phone}`,
    comment !== '—' ? `<b>Комментарий:</b> ${comment}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
      }),
    })

    const data = await response.json()
    if (!data.ok) {
      setCors(res)
      console.error('Telegram API error:', data)
      return res.status(500).json({
        error: data.description || 'Telegram API error',
      })
    }

    setCors(res)
    return res.status(200).json({ success: true })
  } catch (err) {
    setCors(res)
    console.error(err)
    return res.status(500).json({
      error: err.message || 'Failed to send to Telegram',
    })
  }
}
