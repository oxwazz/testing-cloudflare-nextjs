// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// Reacts to POST /hello-world
export async function onRequestPost({request}) {
  // ...
  let res = new Response('<h1>HALIIIII<h1/>')
  res.headers.set('Content-Type', 'text/html')


  return res
}