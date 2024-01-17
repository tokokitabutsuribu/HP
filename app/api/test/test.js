function test(req,res) {
  return new Response(new Blob(JSON.stringify({message:'success'})), { status: 200 });
}

export { test };