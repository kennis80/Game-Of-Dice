//player 1

let randomNumber = Math.ceil(Math.random() * 6)
// console.log(randonNumber);

let randomDiceimage = 'dice ' + randomNumber + '.jpeg'

let randomImageSource = 'Images/' + randomDiceimage

let image = document.querySelectorAll('img')[0]
image.setAttribute('src', randomImageSource)

//player2
let randomNumber2 = Math.ceil(Math.random() * 6)
// console.log(randomNUmber);

let randomDiceimage2 = 'dice ' + randomNumber2 + '.jpeg'

let randomImageSource2 ='images/' + randomDiceimage2

let image2 = document.querySelectorAll('img')[1]
image2.setAttribute('src', randomImageSource2)

// conditional statements

if (randomNumber > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player1 wins🎈'
  } else if (randomNumber2 > randomNumber) {
    document.querySelector('h1').innerHTML = 'Player2 wins🎈'
  } else {
    document.querySelector('h1').innerHTML = 'Draw '
  }

