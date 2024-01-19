import { headers } from 'next/headers'

export default async function Footer() {
    const host = headers().get("host");
    return await fetch(`https://${host}/footer.html`, { next: { revalidate: 20 } })
        .then(res => res.text())
        .then(text => new DOMParser().parseFromString(text, "text/html").body.innerHTML)
}