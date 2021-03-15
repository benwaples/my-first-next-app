import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const request = await fetch('https://akabab.github.io/starwars-api/api/all.json')
  const json = await request.json() 


  res.status(200).json({ json })
}