import { CharacterTypes } from "./types"

export function inaccuratePronouns(genderAccordingToWookiePediea: string): string[] {
  return genderAccordingToWookiePediea === 'male' ?
  ['he','him','his']
  :
  ['she','hers', 'her']
}

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function makePages(arr: CharacterTypes[], perPage = 10): CharacterTypes[][] {
  const pages = [];
  
  while(arr.length) {
    if(arr.length >= perPage) {
      pages.push(arr.splice(0, perPage))
    } else {
      pages.push(arr.slice())
      arr.length = 0
    }
    
  }
  
  return pages;
}