import { NextApiRequest, NextApiResponse } from "next";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  const request = await fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
  const json = await request.json();

  res.json({ json })
}