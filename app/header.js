import { headers } from 'next/headers'
import { parse } from 'node-html-parser';

export default async function Header() {
    const host = headers().get("host");
    return await fetch(`https://${host}/header.html`, { next: { revalidate: 20 } })
        .then(res => res.text())
        .then(text => parse(text).querySelector('body').innerText)
        .then(text=>parse(text))
}