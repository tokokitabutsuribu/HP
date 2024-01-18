export default async function handler(request, response) {
    if (request.method == 'GET') {
        return response.status(200).send({ message: 'GET success' });
    } else {
        let res = new Response();
        return res.status(200).send({ message: 'POST success' });
    }
}