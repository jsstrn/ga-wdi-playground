function Person () {}

Person.name = 'Alfred'

var Tom = new Person()
var Jane = new Person()

// Tom.name = 'Tom'
Jane.name = 'Jane'

console.log(
  Tom.name, Jane.name
)
