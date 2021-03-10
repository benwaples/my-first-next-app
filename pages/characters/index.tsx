
import { CharacterTypes } from '../types'
import Character from './character'


function Index({ characters }): JSX.Element {

  const characterEls: JSX.Element[] = characters.map((character: CharacterTypes, i: number) => <Character {...{character}}/>)


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