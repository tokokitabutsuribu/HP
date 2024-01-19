import { headers } from 'next/headers'
import { parse } from 'node-html-parser';

export default async function Footer() {
    const host = headers().get("host");
    return await fetch(`https://${host}/footer.html`, { next: { revalidate: 20 } })
        .then(res => res.text())
        .then(text => parse(text).body.innerText)
        .then(text=>parse(text))
}