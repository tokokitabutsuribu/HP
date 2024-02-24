import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL ?? '', process.env.SUPABASE_SERVICE_ROLE_KEY ?? '');

export async function POST(rawreq: NextRequest) {
    const req = await rawreq.json()
    for (const music of req.musiclist) {
        if (!(music.musicname && music.artistname)) {
            console.log(`error:null\n${JSON.stringify(music)}`)
            return NextResponse.json({ message: 'request has null' }, { status: 400, statusText: 'bad request' })
        }
        if (!(music.musicname.length<=2000 && music.artistname.length<=2000)) {
            console.log(`error:too long\n${JSON.stringify(music)}`)
            return NextResponse.json({ message: 'request has too long content' }, { status: 400, statusText: 'bad request' })
        }
    }
    let iserror = false;
    await supabase
        .from('musics')
        .insert(req.musiclist)
        .then((data) => {},
            (e) => {
                console.error(e);
                iserror = true;
            })
    if (iserror) { return NextResponse.json({ message: 'ERROR' }, { status: 500, statusText: 'server error' }) }
    return NextResponse.json({ message: 'OK' }, { status: 200 })
}