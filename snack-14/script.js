//Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

const timerDisplay = document.getElementById("timer-display")

let userSeconds = Number.parseInt(prompt("Type the number of seconds"), 10)
    while(isNaN(userSeconds)){
        userSeconds = Number.parseInt(prompt("Type the number of seconds"), 10)
    }


const timerFunc = setInterval(function (){
    timerDisplay.innerHTML(userSeconds)
    userSeconds--;
    
    if(userSeconds<=0){
    clearInterval(timerFunc)
    console.log("Time has ended")
}
}, 1000)
