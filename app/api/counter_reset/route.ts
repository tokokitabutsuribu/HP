import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(request:NextRequest){
    const now = new Date().getUTCHours();
    await kv.del('users');
    await kv.lpush('last_reset',now)
    return NextResponse.json({})
}