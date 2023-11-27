import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

export default async (request, response) => {
    if (request.method !== 'POST') {
        return response.status(400).json({ "status": "error" });
    }
    //送信元の認証
    //microCMSのwebhookのシークレット値
    let expectedSignature = createHmac('sha256', process.env.MICROCMS_SECRET_KEY)
    expectedSignature = expectedSignature.update(JSON.stringify(request.body));
    expectedSignature = expectedSignature.digest('hex');
    const signature = request.headers['x-microcms-signature'];
    console.log(signature)
    if (!timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
        fin = true;
        console.log("not right access")
        return response.status(401).json({ "status": "error" });
    }

    switch (request.body.type) {
        case 'new':

            break;
        case 'edit':

            break;
        case 'delete':

            break;
        default:
            fin = true;
            console.log("type is bad")
            return response.status(400).json({ "status": "error" });
    }
}  