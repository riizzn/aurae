import { NextRequest, NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  try {
    await emailjs.send(
      "service_pi3hc7k",
      "template_ukeep6x",



      {
        name,
        email,
        message: `Welcome to Aurae, ${name}!`,
      },
      "bdpse2R721aCKufJ5"
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email failed:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}