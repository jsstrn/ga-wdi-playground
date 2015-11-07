var size = 101

// method1(size)
// method2(size)
method3(size)

function method1 (size) {
  for (var i = 1; i <= size; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

function method2 (size) {
  for (var i = 1; i <= size; i++) {
    i % 15 === 0 ? console.log('fizzbuzz')
    : i % 5 === 0 ? console.log('buzz')
    : i % 3 === 0 ? console.log('fizz')
    : console.log(i)
  }
}

function method3 (size) {
  var array = []
  for (var i = 0; i < size; i++) {
    array[i] = array.push(i)
  }

  array.forEach(function (i) {
    i % 15 === 0 ? console.log('fizzbuzz')
    : i % 5 === 0 ? console.log('buzz')
    : i % 3 === 0 ? console.log('fizz')
    : console.log(i)
  })
}

function method4 (size) {
  for (var i = 1; i <= size; i++) {
    var text = i % 15 === 0 ? 'fizzbuzz'
    : i % 5 === 0 ? 'buzz'
    : i % 3 === 0 ? 'fizz'
    : i
    console.log(text)
  }
}
