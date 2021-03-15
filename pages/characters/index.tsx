import { useState, useEffect } from 'react'
import { CharacterTypes } from '../../utils/types'
import Character from '../../components/character'
import styles from '../../styles/CharacterList.module.css'
import Filter from '../../components/Filter'

const URL = process.env.API_URL || 'http://localhost:3000'


function Index({ json }): JSX.Element {
  const [characters, setCharacters] = useState<CharacterTypes[]>(json)
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterTypes[]>(json)

  const [filterQuery, setFilterQuery] = useState<string>('')

  useEffect(() => {
    setFilteredCharacters(filterQuery ? characters.filter((character: CharacterTypes) => character.name.toUpperCase().includes(filterQuery.toUpperCase())) : characters) 

  }, [filterQuery])

  const characterEls: JSX.Element[] = filteredCharacters.map((character: CharacterTypes, i: number) => <Character {...{character}} key={character.name} />)

  
  // console.log(URL);
  
  return (
    <>
    <div>
      <Filter {...{ filterQuery, setFilterQuery }}/>
    </div>
    <ul className={styles.characterList}>
      {characterEls}
    </ul>
    </>
  )
}

export default Index


export async function getServerSideProps() {

  const request = await fetch(`${URL}/api/starwars`)
  const { json } = await request.json()
  return ({
    props: { json }
  })
}