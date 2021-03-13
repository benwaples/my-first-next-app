import Image from 'next/image'
import { CharacterTypes } from "../../utils/types";
import { capitalize, inaccuratePronouns } from "../../utils/utils";
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
    apprentices,
    equipment,
    affiliations,
    formerAffiliations
  } = character


  function commaSeparatedString(arr: string[]) {
    const type = typeof arr
    // console.log(arr);
    
    if(type !== 'string') return arr.join(', ')
    return arr
  }

  const firstAttribute = masters || equipment || formerAffiliations;
  const secondAttribute = apprentices || affiliations

  return (
   <section className={styles.detailCharacter}>
     <h1>{name}</h1>
     <Image src={image} alt={name}/>
     <p><strong>Description</strong>: {name} is {height}m tall, born on {bornLocation || "unknown location"}, and is of {species} species.{cybernetics && `${capitalize(inaccuratePronouns(gender)[0])} has a ${cybernetics} cybernetic.`}  {name}'s {masters ? 'masters' : 'equipment'} includes {commaSeparatedString(firstAttribute) || 'unknown equipment'}, and {inaccuratePronouns(gender)[2]} {apprentices ? 'apprentices' : 'affiliations'} are {commaSeparatedString(secondAttribute) || 'unknown attributes'}.</p>
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
