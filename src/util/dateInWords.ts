export function dateInWords(date: any) {
  const dateInWords = date.toLocaleString('default', { month: 'short'}) + " " + date.toLocaleString('default', {day: 'numeric'})
  return dateInWords
}

export function dateInWordsIncludeYear(date: any) {
  const dateInWords =
    date.toLocaleString('default', { month: 'short'})
    + " "
    + date.toLocaleString('default', { day: 'numeric'})
    + " "
    + date.toLocaleString('default', {year: 'numeric'})
  return dateInWords
}

export function dateInWordsTimeOnly(date:any){
  const dateInWords = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
  return dateInWords

}