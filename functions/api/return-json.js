// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
// import {TES} from "../../halooo/sdfsdfsdf";
// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// Reacts to POST /hello-world
export async function onRequestPost({request}) {
  const datas = await request.json()
  const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${datas.id ? datas.id : ""}`)
  return Response.json({...datas,...data})
}