'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  name: z.string().min(1, '必須項目です'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  message: z.string().min(1, '必須項目です')
})

// フォームデータの型を定義
type ContactFormData = {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || '送信に失敗しました')
      }
      
      alert('送信が完了しました')
    } catch (error) {
      console.error('Submit error:', error)
      alert(error instanceof Error ? error.message : 'エラーが発生しました')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full">
      <div>
        <label htmlFor="name" className="block my-2">お名前
          <span className="text-red-500 text-sm ml-2">*必須</span>
        </label>
        <input
          {...register('name')}
          placeholder="お名前"
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message?.toString()}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block my-2">メールアドレス
          <span className="text-red-500 text-sm ml-2">*必須</span>
        </label>
        <input
          {...register('email')}
          placeholder="メールアドレス"
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message?.toString()}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block my-2">お問い合わせ内容
          <span className="text-red-500 text-sm ml-2">*必須</span>
        </label>
        <textarea
          {...register('message')}
          placeholder="お問い合わせ内容"
          className="w-full p-2 border rounded h-32"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message?.toString()}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="my-2 px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black">
        {isSubmitting ? '送信中...' : '送信'}
      </button>
    </form>
  )
}
