export default function Route(
  req,
  res
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}