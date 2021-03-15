import { NextApiRequest, NextApiResponse } from 'next'
import { makePages } from '../../../utils/utils'

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const page = Number(req.query.page)
  const perPage = Number(req.query.perPage)
  console.log(page, perPage);
  
  
  const request = await fetch('https://akabab.github.io/starwars-api/api/all.json')
  const json = await request.json() 

  if(page) {
    const paginatedJson = makePages(json, perPage)

    res.status(200).json({ 
      totalPages: paginatedJson.length + 1,
      currentPage: page,
      results: paginatedJson[page]
    })
  } else {
    res.status(200).json({ json})
  }

  
}