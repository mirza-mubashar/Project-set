const ranNum = Math.floor(((((Math.random())*10)))+1)
let totalTries = 5
let preGuesses = []
let displayContainer = document.querySelector('.display-container')
displayContainer.style.padding = '10px'
displayContainer.style.borderRadius = '10px'

document.querySelector('form').addEventListener( 'submit', (e)=>{
    e.preventDefault()

    let userGuess = document.querySelector('#user-guess').value
    

    if( userGuess == ranNum ){
        
        preGuesses.push(userGuess)
        displayContainer.innerHTML = `Congratulations! you guess the number in ${preGuesses.length} tries. Plese refresh the page to play again`
        displayContainer.style.backgroundColor = 'green'

    }else{
        displayContainer.style.backgroundColor = 'red'
        totalTries -= 1;
        preGuesses.push(userGuess)
        displayContainer.innerHTML = `You'r remaining tries are ${totalTries} <br> and you'r previous guesses are ${preGuesses} `
        
        if(totalTries == 0){
            document.querySelector('.display-container').innerHTML = `Please refresh the page to play again`
            totalTries = 5
        }

    }
} )


