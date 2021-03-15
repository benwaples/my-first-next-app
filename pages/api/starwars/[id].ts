import { NextApiRequest, NextApiResponse } from "next";


export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  res.json({ id })
}