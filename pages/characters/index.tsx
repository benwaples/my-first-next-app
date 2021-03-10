
import { CharacterTypes } from '../types'


function Index({ characters }): JSX.Element {

  const characterEls: JSX.Element[] = characters.results.map((character: CharacterTypes, i: number) => (

  <h1 key={character.url}><a href={`characters/${i + 1}`}>{character.name}</a></h1>
  ))


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