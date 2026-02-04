import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send } from 'lucide-react'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(2, 'Введите имя'),
  email: z.string().email('Некорректный email'),
  phone: z.string().min(10, 'Введите телефон'),
  comment: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: 'Необходимо согласие' }) }),
})

type FormData = z.infer<typeof schema>

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  comment: '',
  consent: false,
} as unknown as FormData

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const telegramApiUrl = import.meta.env.VITE_TELEGRAM_API_URL as string | undefined

  const onSubmit = async (data: FormData) => {
    try {
      const url = telegramApiUrl || 'https://formspree.io/f/xpwnqgjk'
      const body = telegramApiUrl
        ? { name: data.name, email: data.email, phone: data.phone, comment: data.comment ?? '' }
        : data
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.ok) {
        setStatus('success')
        reset(defaultValues)
      } else {
        const err = await res.json().catch(() => ({}))
        console.error(err)
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="booking" className="py-16 md:py-24 bg-paper">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-momiji-brown text-center mb-4">
          Забронировать место
        </h2>
        <p className="text-stone text-center mb-12">
          Оставьте заявку — мы свяжемся с вами
        </p>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-momiji-brown mb-1">
                Имя *
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className="w-full px-4 py-3 rounded-lg border border-stone/30 focus:ring-2 focus:ring-momiji-orange focus:border-transparent outline-none"
                placeholder="Ваше имя"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-momiji-brown mb-1">
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full px-4 py-3 rounded-lg border border-stone/30 focus:ring-2 focus:ring-momiji-orange focus:border-transparent outline-none"
                placeholder="email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-momiji-brown mb-1">
                Телефон *
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-3 rounded-lg border border-stone/30 focus:ring-2 focus:ring-momiji-orange focus:border-transparent outline-none"
                placeholder="+7 (999) 123-45-67"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-momiji-brown mb-1">
                Комментарий
              </label>
              <textarea
                id="comment"
                {...register('comment')}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-stone/30 focus:ring-2 focus:ring-momiji-orange focus:border-transparent outline-none resize-none"
                placeholder="Вопросы или пожелания"
              />
            </div>
            <div className="flex items-start gap-2">
              <input
                id="consent"
                type="checkbox"
                {...register('consent')}
                className="mt-1 rounded border-stone/30 text-momiji-orange focus:ring-momiji-orange"
              />
              <label htmlFor="consent" className="text-sm text-stone">
                Согласие на обработку персональных данных *
              </label>
            </div>
            {errors.consent && (
              <p className="text-sm text-red-600">{errors.consent.message}</p>
            )}
            {status === 'success' && (
              <p className="text-green-600 font-medium">Заявка отправлена. Мы свяжемся с вами.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-medium">Ошибка отправки. Попробуйте позже или напишите в Telegram: @vsemaya</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-lg font-semibold bg-momiji-orange hover:bg-maple-accent text-white transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Отправка…' : 'Забронировать место'}
            </button>
          </form>
          <div className="space-y-6">
            <h3 className="font-display font-semibold text-xl text-momiji-brown">Контакты</h3>
            <p className="text-stone">
              По вопросам и бронированию пишите в Telegram организатору путешествия:
            </p>
            <a
              href="https://t.me/vsemaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-medium text-momiji-orange hover:text-maple-accent transition-colors"
            >
              <Send className="w-5 h-5" />
              @vsemaya
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
