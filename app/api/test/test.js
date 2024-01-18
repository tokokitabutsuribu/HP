function test(req,res) {
  res.status=200;
  return res.send(JSON.stringify({message:'success'}))
  
}

export { test };