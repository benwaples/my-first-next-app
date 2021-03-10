
import { CharacterTypes } from '../types'


function Index({ characters }): JSX.Element {

  const characterEls: JSX.Element[] = characters.map((character: CharacterTypes, i: number) => (

  <h1 key={character.id}><a href={`characters/${i + 1}`}>{character.name}</a></h1>
  ))


  return (
    <>
    {characterEls}
    </>
  )
}

export default Index


export async function getStaticProps() {

  const request = await fetch('https://akabab.github.io/starwars-api/api/all.json')
  const json = await request.json()
  console.log(json)
  return ({
    props: { characters: json }
  })
}