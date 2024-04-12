const body = document.querySelector("body")
let random = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#submit")
const guess = document.querySelector("#guessNumber")
const prev = document.querySelector("#prevGuess")
const remainGuess = document.querySelector("#remainGuess")
const lowOrhigh = document.querySelector("#lowOrHigh")

const res = document.querySelector("#res")

const para = document.createElement("p")


let prevArr = []
let guessCnt = 1

let playGame = true


if(playGame){
    submit.addEventListener('click' ,function(e){
        e.preventDefault()
        

        const g = parseInt(guess.value)
        validateGuess(g)
    })
}
function validateGuess(g){
    //check value if bw 1-100 or not
    if(prevArr.includes(g)){
        alert(`You have already used ${g} ,Please use another number`)
    } else if(g >= 1 && g <= 100 && !isNaN(g)){
        prevArr.push(g)
        if(prevArr.length <= 10){
            displayGuess(g)
            checkGuess(g)
        } else {
            displayGuess(`Game over . Random number was ${random}`)
            endGame()
        }
    } else {
        alert("Please Enter a number b/w given range")
    }
}

function checkGuess(g){
    //check if it is  lower or higher than the random number
    if(g === random){
        displayMsg(`Congratulations, you have guessed the right number i.e ${random}`)
        endGame()
    } else if(g < random){
        displayMsg(`Your guessed number is TOO LOW`)
    } else {
        displayMsg(`Your guessed number is TOO HIGH`)
    }
}


function displayGuess(g){
    //clean prev values and update pevGuess and guess remaining
    guess.value = ''
    prev.innerHTML += `${g} ,`
    remainGuess.innerHTML = `${10-prevArr.length}`
}


function displayMsg(msg){
    lowOrhigh.innerHTML = `<h2 id-"head"> ${msg} </h2>`
}


function endGame(){
    guess.value = ''
    guess.setAttribute('disabled','')
    para.classList.add('btn')
    para.innerHTML = `<button id="gameOver"> Start new Game </button>`
    res.appendChild(para)
    playGame = false
    newGame()
}


function newGame(){
    const newGameBtn = document.querySelector("#gameOver")
    newGameBtn.addEventListener('click' , function(e){
        random = parseInt(Math.random() * 100 + 1)
        prevArr = []
        prev.innerHTML = ''
        remainGuess.innerHTML = `${10-prevArr.length}`
        guess.removeAttribute('disabled')
        res.removeChild(para)
        lowOrhigh.innerHTML = ``

        playGame = true
    });
}







// Dark Mode-----------------------------------------------------------
const dark = document.querySelector("#darkMode")
const main = document.querySelector("#main")
const moon = document.querySelector("#moon")
const border = document.querySelector("#border")

let click = false

dark.addEventListener('click',function(e){
    click = !click

    if(click){
        guess.style.color = 'black'
        border.style.borderColor = 'white'
        main.style.color = 'white'
        moon.style.color = 'white'
        body.style.backgroundColor = 'black';
    } else {
        guess.style.color = 'black'
        moon.style.color = 'black'
        border.style.borderColor = 'black'
        main.style.color = 'black'
        body.style.backgroundColor = 'white';
    }

})