import { createClient } from '@supabase/supabase-js'
const { createHmac } = await import('node:crypto');
const { timingSafeEqual } = await import('node:crypto');
// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

export default async (request, response) => {
    let fin = false;
    if (request.method !== 'POST') {
        return response.status(400).json({ "status": "error" });
    }
    //送信元の認証
    //microCMSのwebhookのシークレット値
    let expectedSignature = createHmac('sha256', process.env.MICROCMS_SECRET_KEY)
    expectedSignature = expectedSignature.update(JSON.stringify(request.body));
    expectedSignature = expectedSignature.digest('hex');
    const signature = request.headers['x-microcms-signature'];
    if (!timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
        fin = true;
        console.log("not right access")
        return response.status(401).json({ "status": "error" });
    }
    const addArticleDB = async (id, newcontent) => {

        const { data, statusText, error } = await supabase
            .from('articles')
            .upsert({ id: id, title: newcontent.title, description: newcontent.description, revisedAt: newcontent.revisedAt, category: newcontent.category })
            .select();
        console.log(statusText)

    }
    const deleteArticleDB = async (id) => {
        const { statusText, error } = await supabase
            .from('articles')
            .delete()
            .eq('id', id)
        console.log(statusText)
    }
    const articleid = request.body.id;
    switch (request.body.type) {
        case 'new':
            await addArticleDB(articleid, request.body.contents.new.publishValue)
            break;
        case 'edit':
            if (request.body.contents.new.status == "CLOSED") {
                await deleteArticleDB(articleid)
            } else if (request.body.contents.new.status == "PUBLISH") {
                await addArticleDB(articleid, request.body.contents.new.publishValue)
            }
            break;
        case 'delete':
            await deleteArticleDB(articleid);
            break;
        default:
            fin = true;
            console.log("type is bad")
            return response.status(400).json({ "status": "error" });
    }
    if (!request.body.contents.old) {
        if (articleid != request.body.contents.old.id) {
            await deleteArticleDB(request.body.contents.old.id);
        }
    }

    if (!fin) return response.status(200).json({ "status": "success" })
}  