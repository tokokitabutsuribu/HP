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
    const addArticleDB = (id, newcontent) => {
        //ex)newcontent.title
    }
    const deleteArticleDB = (id) => {

    }
    const articleid = request.body.id;
    switch (request.body.type) {
        case 'new':
            addArticleDB(articleid, request.body.content.new.publishValue)
            break;
        case 'edit':
            if (request.body.content.new.status == "CLOSED") {
                deleteArticleDB(articleid)
            } else if (request.body.content.new.status == "PUBLISH") {
                addArticleDB(articleid, request.body.content.new.publishValue)
            }
            break;
        case 'delete':
            deleteArticleDB(articleid);
            break;
        default:
            fin = true;
            console.log("type is bad")
            return response.status(400).json({ "status": "error" });
    }
}  