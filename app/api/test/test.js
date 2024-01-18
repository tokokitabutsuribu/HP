function test(req,res) {
  res.status = 200;
  res.send = { message: 'success' };
  return res;
}

export { test };