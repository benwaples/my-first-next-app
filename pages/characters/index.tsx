
import { CharacterTypes } from '../types'


function Index({ characters }): JSX.Element {

  const characterEls: JSX.Element[] = characters.results.map((character: CharacterTypes) => <h1 key={character.url}>{character.name}</h1>)

  console.log(characters)

  return (
    <>
    {characterEls}
    </>
  )
}

export default Index


export async function getStaticProps() {

  const request = await fetch('https://swapi.dev/api/people')
  const json = await request.json()

  return ({
    props: { characters: json }
  })
}