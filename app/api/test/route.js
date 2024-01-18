//import { test } from './test';
//export { test as GET };
export default function handler(req, res) {
    res.status = 200;
    return res.send(JSON.stringify({ message: 'success' }));

}
