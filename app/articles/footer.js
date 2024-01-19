export default function Footer() {
    await fetch('/footer.html', { next: { revalidate: 20 } })
        .then(res => res.text())
        .then(text => new DOMParser().parseFromString(text, "text/html").body.innerHTML)
}