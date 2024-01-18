//import { test } from './test';
//export { test as GET };

export default async function GET(req, res) {
    res.status = 200;
    res.send = { message: 'success' };
    return res;
}