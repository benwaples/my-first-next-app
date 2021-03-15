import { NextApiRequest, NextApiResponse } from 'next'
import { makePages } from '../../../utils/utils'
const URL = 'http://localhost:3000'

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const page = Number(req.query.page)
  const perPage = Number(req.query.perPage)
  
  const request = await fetch('https://akabab.github.io/starwars-api/api/all.json')
  const json = await request.json() 

  if(page) {
    const paginatedJson = perPage ? makePages(json, perPage) : makePages(json)

    res.status(200).json({ 
      totalPages: paginatedJson.length + 1,
      currentPage: page,
      nextPage: `${URL}/api/starwars?page=${page + 1}&perPage=${perPage}`,
      prevPage: `${URL}/api/starwars?page=${page !== 1 ? page - 1 : page }&perPage=${perPage}`,
      results: paginatedJson[page - 1]
    })
  } else {
    res.status(200).json({ json })
  }

  
}