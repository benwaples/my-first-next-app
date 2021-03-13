export function inaccuratePronouns(genderAccordingToWookiePediea: string): string[] {
  return genderAccordingToWookiePediea === 'male' ?
  ['he','him','his']
  :
  ['she','hers', 'her']
}

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}