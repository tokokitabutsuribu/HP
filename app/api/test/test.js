import { NextResponse } from 'next/server'
function test(req) {
  return Response.json({ message: 'success' }, { status: 200 });
}

export { test };