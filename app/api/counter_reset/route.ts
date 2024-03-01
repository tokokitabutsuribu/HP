import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(request:NextRequest){
    const body=await request.json()
    if(body.Auth!==process.env.COUNTER_SECRET){
        console.warn('bad access')
        console.log(`Auth value:${body.Auth}`)
        return NextResponse.json({},{status:403,statusText:'Forbidden'})
    }

    const now = new Date().getUTCHours();
    await kv.del('users');
    await kv.lpush('last_reset',now)
    return NextResponse.json({})
}