import { CharacterTypes } from "../utils/types"
import Link from 'next/link'

interface Props {
  character: CharacterTypes
}

function Character(props: Props) {
  const {
    id,
    name,
    homeworld,
    image,
  } = props.character

  return (
    <li key={id}>
      <h1>{name}</h1>
      <img src={image} alt={name}/>
      <p>origin: {homeworld}</p>
      <Link href={`/characters/${id}`}>
        <a>learn more</a>
      </Link>
    </li>
  )
}

export default Character
