import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, MessageCircle, Phone, Instagram } from 'lucide-react'
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

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('https://formspree.io/f/xpwnqgjk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset(defaultValues)
      } else {
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
              <p className="text-red-600 font-medium">Ошибка отправки. Попробуйте позже или напишите в Telegram.</p>
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
            <ul className="space-y-4 text-stone">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-momiji-orange" />
                <a href="mailto:info@example.com" className="hover:text-momiji-orange">
                  info@example.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-momiji-orange" />
                <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="hover:text-momiji-orange">
                  Telegram: @username
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-momiji-orange" />
                <a href="tel:+79991234567" className="hover:text-momiji-orange">
                  WhatsApp: +7 999 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-momiji-orange" />
                <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-momiji-orange">
                  Instagram: @username
                </a>
              </li>
            </ul>
            <p className="text-sm text-stone">
              Замените email, Telegram, WhatsApp и Instagram на актуальные контакты в коде компонента ContactForm.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
