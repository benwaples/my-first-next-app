export interface CharacterTypes {
  id: number;
  name: string;
  height: number;
  mass: number;
  gender: string;
  homeworld: string;
  wiki: string;
  image: string;
  born: number;
  bornLocation: string;
  died: number;
  diedLocation: string;
  species: string;
  hairColor: string;
  eyeColor: string;
  skinColor: string;
  cybernetics: string;
  affiliations?: (string)[] | null;
  masters?: (string)[] | null;
  apprentices?: (string)[] | null;
  formerAffiliations?: (null)[] | null;
}

