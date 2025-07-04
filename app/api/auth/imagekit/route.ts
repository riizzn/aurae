export const runtime = 'nodejs';

import ImageKit from "imagekit";
import config from "@/lib/config";
import { NextResponse } from "next/server";

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

console.log('=== ImageKit Config Debug ===');
console.log('publicKey:', publicKey ? 'SET' : 'MISSING');
console.log('privateKey:', privateKey ? 'SET' : 'MISSING');
console.log('urlEndpoint:', urlEndpoint ? 'SET' : 'MISSING');

const imagekit = new ImageKit({
  publicKey,
  privateKey,
  urlEndpoint,
});

export async function GET() {
  console.log('=== ImageKit Auth Request ===');
  try {
    const result = imagekit.getAuthenticationParameters();
    console.log('Auth success:', result);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}