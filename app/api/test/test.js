function test(req,res) {
  return res.status(200).send({message:'success'})
  
}

export { test };