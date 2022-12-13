const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = (tutorials) => {
//   return tutorials.split(' ').map((word) => {
//     return word[0].toUpperCase() + word.slice(1)
//   })
//   return titleCased.join(' ')
// }
// const titleCased = tutorials.split(' ').map(word => word[0].toUpperCase() + word.slice(1)
//   ).join(' ')
const titleCased = () => {
  return tutorials.map(sentence => { 
  const words = sentence.split(' ')
  const capitalize = words.map(letter => letter.charAt(0).toUpperCase() + letter.slice(1))
console.log(capitalize)
return capitalize.join(' ')
})}



//   charAt[0].toUpperCase() + word.slice(1).toLowerCase())
//   .join('')
