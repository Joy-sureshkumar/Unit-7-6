document.getElementById('button').addEventListener('click', multiply)

let number1 = 0
let number2 = 0
let counter = 0
let answer = 0
let negative = false

function multiply () {
  number1 = document.getElementById('input1').value
  number2 = document.getElementById('input2').value
  number1 = parseInt(number1)
  number2 = parseInt(number2)
  answer = 0
  negative = false

  if (number1 < 0) {
    negative = !negative
    number1 = Math.abs(number2)
  }
  if(number2 < 0) {
    
  }

  for (counter = 0; counter < number1; counter++) {
    answer = answer + number2
  }
  document.getElementById('total').innerHTML = answer
}
