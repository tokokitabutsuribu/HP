import { test } from './test';
//export { test as GET };

export function GET(req, res) {
    return res.status(200).send({ message: 'success' });
}