// Reacts to POST /hello-world

export async function onRequestPost({request}) {
  // ...
  return new Response(JSON.stringify(await request.json()));

}
