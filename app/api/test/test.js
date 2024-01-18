import { NextResponse } from 'next/server'
function test(req) {
  return NextResponse.json({ message: 'success' }, { status: 200 });
}

export { test };