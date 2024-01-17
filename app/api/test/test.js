function test(req,res) {
  return new Response(new blob(JSON.stringify({message:'success'})), { status: 200 });
}

export { test };