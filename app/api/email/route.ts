import { NextResponse } from 'next/server'

import { sendMessage } from '@/services/email'

interface IEmailForm {
  [key: string]: string
}

export const POST = async (request: Request) => {
  const NEXT_PUBLIC_EMAIL_SERVICE_API = process.env.NEXT_PUBLIC_EMAIL_SERVICE_API || ''
  const body: IEmailForm = await request.json()

  const newFormBody = new FormData()
  newFormBody.append('access_key', NEXT_PUBLIC_EMAIL_SERVICE_API)

  for (const key in body) {
    newFormBody.append(key, body[key])
  }

  try {
    const response = await sendMessage(newFormBody)
    return NextResponse.json({ status: true, data: response.data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: false, error }, { status: 400 })
  }
}
