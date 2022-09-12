// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// Reacts to POST /hello-world
export async function onRequestPost({request}) {
  // ...
  return new Response(`Hello world`, request.body);
}