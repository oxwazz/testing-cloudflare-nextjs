// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// Reacts to POST /hello-world
export async function onRequestPost({request}) {
  const data = await request.json()
  const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${data.id ? data.id : ""}`)
  return Response.json()
}