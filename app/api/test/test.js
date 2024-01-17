function test(req,res) {
  return res.status(200).json({ "status": 'success' });
}

export { test };