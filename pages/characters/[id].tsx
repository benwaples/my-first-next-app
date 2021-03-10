import { CharacterTypes } from "../types";
import { capitalize, inaccuratePronouns } from "../utils";
import styles from '../../styles/DetailCharacter.module.css'

function DetailCharacter({ character }: { character: CharacterTypes }) {
  const {
    name,
    gender,
    image,
    height,
    wiki,
    bornLocation,
    species,
    cybernetics,
    masters,
    apprentices
  } = character

  function commaSeparatedString(arr: string[]) {
    return arr.join(', ')
  }

  return (
   <section className={styles.detailCharacter}>
     <h1>{name}</h1>
     <img src={image} alt={name}/>
     <p>Description: {name} is {height}m tall, born on {bornLocation}, and is of {species} species. {capitalize(inaccuratePronouns(gender)[0])} has a {cybernetics} cybernetic. {name}'s masters include {commaSeparatedString(masters)}, and {inaccuratePronouns(gender)[2]} apprentices are {commaSeparatedString(apprentices)}.</p>
     <p>Click <a href={wiki} target="_blank">here</a> to learn more</p>
   </section>
  )
}

// this runs at request
export async function getServerSideProps({ params }) {
  const request = await fetch(`https://akabab.github.io/starwars-api/api/id/${params.id}.json`)
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

export default DetailCharacter
