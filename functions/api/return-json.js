// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// Reacts to POST /hello-world
export async function onRequestPost({request}) {
  const formData = await request.formData();
  const body = {};
  for (const entry of formData.entries()) {
    body[entry[0]] = entry[1];
  }
  return Response.json(body)
}