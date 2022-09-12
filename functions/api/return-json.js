// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import axios from 'axios'
import {TES} from "../../halooo/sdfsdfsdf";
// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// Reacts to POST /hello-worldh
export async function onRequestPost({request}) {
  const datas = await request.json()
  await fetch(`https://jsonplaceholder.typicode.com/users/${datas.id ? datas.id : ""}`, {
    method: 'GET',
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // },
  });
  const content = await rawResponse.json();
  const {data} = await rawResponse.json();

  return Response.json({...datas,TES,data})
}