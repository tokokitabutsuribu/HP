import Link from 'next/link'
export default function Page({ params }) {
  let a = "/articles/" + (params.id + 1) + "/";
  return (
    <div>
      <div>My Post</div>
      <a href="">a</a>
      <Link href={a}>Link</Link>
      </div>
  )
}