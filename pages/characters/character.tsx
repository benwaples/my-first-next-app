import { CharacterTypes } from "../types"


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
      <a href={`/characters/${id}`}>learn more</a>
    </li>
  )
}

export default Character
