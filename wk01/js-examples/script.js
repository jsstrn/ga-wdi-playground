var person = 'sebastiaan'

// Count the number of times the letter a appears in the name

person.forEach()

person.filter(function (letter) { return letter === 'a' }).length

function greetMe (greeting, name) {
  if (typeof greeting !== 'string') {
    greeting = 'hello'
  }
  if (typeof name !== 'string') {
    name = 'stranger'
  }
  capitalizeFirstLetter(greeting)
  capitalizeFirstLetter(name)
  return greeting + ' ' + name
}

function capitalizeFirstLetter (word) {
  return word.toUpperCase().substring(0, 1) + word.toLowerCase().substring(1, 100)
}

console.log(
  greetMe(), capitalizeFirstLetter('james')
)

// Test Cases
console.log(
  greetMe() === 'Hello Stranger'
)
console.log(
  capitalizeFirstLetter('james') === 'James'
)

var message = ['hello', 'there']

message.forEach(function (word) { return console.log(typeof word) })
