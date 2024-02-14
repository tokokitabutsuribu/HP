import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const crypto = require('crypto')

export function middleware(request: NextRequest) {

    const response = NextResponse.next()


    if (!request.cookies.has('counterID')) {
        const newID = crypto.randouUUID()
        request.cookies.set('counterID',newID)
        response.cookies.set('counterID', newID)
    }
    return response
}


export const config = {
    matcher: ['/:path']
}