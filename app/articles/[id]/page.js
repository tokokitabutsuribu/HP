import Link from 'next/link'
export default function Page({ params }) {
  let a = "/articles/" + (params.id + 1) + "/";
  return (
    <div>
      <hr></hr>
      <div>My Post</div>
      <div>{params.id}</div>
      <a href={a}>a</a><br />
      <Link href={a}>Link</Link>
      <hr></hr>
      </div>
  )
}