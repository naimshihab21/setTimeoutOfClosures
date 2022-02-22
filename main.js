// setTimeout() of closures
// 1 - 5
function closures() {
  for(let i = 1; i <= 5; i++) {
    function close(y) {
      setTimeout(() => {
        console.log(y)
      }, y * 1000)
    }
    close(i)
  }
  console.log('Naim Shihab')
}
closures()