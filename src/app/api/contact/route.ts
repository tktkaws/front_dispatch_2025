import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from 'microcms-js-sdk'

const resend = new Resend(process.env.RESEND_API_KEY)
const microCMS = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!
})


export async function POST(request: Request) {
  try {
    const data = await request.json()
    console.log(data)
    
    // microCMSの環境変数チェック
    if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
      console.error('Required environment variables are not set')
      return NextResponse.json(
        { error: 'サーバーの設定が不適切です' },
        { status: 500 }
      )
    }

    try {
      // microCMSへの保存
      await microCMS.create({
        endpoint: 'contact',
        content: data
      })
    } catch (microCMSError) {
      console.error('microCMS error:', microCMSError)
      return NextResponse.json(
        { error: 'データの保存に失敗しました' },
        { status: 500 }
      )
    }

    // Resendでメール送信
    await resend.emails.send({
        from: 'contact@front-disptach-2025.com',
        to: data.email,
        subject: '新しいお問い合わせ',
        html: `
          <h1>新規問い合わせ</h1>
          <p>名前: ${data.name}</p>
          <p>メール: ${data.email}</p>
          <p>内容: ${data.message}</p>
        `
      })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json(
      { error: '送信に失敗しました' },
      { status: 500 }
    )
  }
}
