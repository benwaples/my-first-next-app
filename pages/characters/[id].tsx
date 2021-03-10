import { useRouter } from 'next/router'
import { CharacterTypes } from '../types'


function Character({ character }) {
  
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  return (
    <>
      <h1>Youre Character</h1>
      <h3>{character.name}</h3>
    </>
  )
}

// this runs at request
export async function getServerSideProps({ params }) {
  const request = await fetch(`https://swapi.dev/api/people/${params.id}`)
  const json = await request.json();
  
  
  return {
    props: { character: json}
  }
}

// run this functions when we make a request, they are static
/*
    export async function getStaticProps({ params }) {
      const request = await fetch(`https://swapi.dev/api/people/${params.id}`)
      const json = await request.json();


      return {
        props: { character: json}
      }

    }


    // tells next the paths that are possible
    export async function getStaticPaths() { 
      const request = await fetch('https://swapi.dev/api/people')
      const json = await request.json()

      const paths = json.results.map((character: CharacterTypes, i: number) => ({
        params: { id: i + 1 }
      }))

      return {
        paths,
        fallback: false
      }
    }
*/

export default Character
