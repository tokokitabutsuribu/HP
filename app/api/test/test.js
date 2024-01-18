function test(req,res) {
  return res.status(200).send(JSON.stringify({message:'success'}))
  
}

export { test };