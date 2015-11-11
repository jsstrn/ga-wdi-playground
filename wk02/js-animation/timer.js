var direction = 1

// setInterval(function () {
//   var logo = document.querySelector('main div')
//   var distance = parseInt(logo.style.top || '0', 10)
//   if (distance > 50 || distance < 0) {
//     direction = direction * -1
//   }
//   logo.style.top =
//     logo.style.left =
//     distance + (direction * 1) + 'px'
// }, 10)

window.requestAnimationFrame(
  function step () {
    var logo = document.querySelector('main div')
    var distance = parseInt(logo.style.top || '0', 10)
    if (distance > 50 || distance < 0) {
      direction = direction * -1
    }
    logo.style.top =
      logo.style.left =
      distance + (direction * 1) + 'px'
    window.requestAnimationFrame(step)
  })
