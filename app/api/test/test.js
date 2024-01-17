function test(req,res) {
  return new Response({ 'message': 'success' }, { status: 200 });
}

export { test };