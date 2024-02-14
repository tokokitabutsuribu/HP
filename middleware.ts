import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import crypto from 'crypto'

export function middleware(request: NextRequest) {

    const response = NextResponse.next()


    if (!request.cookies.has('counterID')) {
        const newID = crypto.randomUUID()
        request.cookies.set('counterID',newID)
        response.cookies.set('counterID', newID)
    }
    console.log(request.cookies.getAll())
    return response
}


export const config = {
    matcher: ['/','/index']
}
