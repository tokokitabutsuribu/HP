function test(req) {
  return new Response({ message: 'success' }, { status: 200 });
}

export { test };