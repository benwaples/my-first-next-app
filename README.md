This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<br>
<br>

# SSR
## see all characters
`/characters`
## see a character by id
`/characters/<number>`

<br>
<br>

# Endpoints
## get all characters in json
`/api/starwars`

## get character by id
`/api/starwars/<number>`

## Pagination
get 10 characters a page
`/api/starwars?page=<number>`

get specified characters per page
`/api/starwars?page=<number>&perPage=<number>`

data sourced from https://github.com/akabab/starwars-api