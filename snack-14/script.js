//Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

const timerDisplay = document.getElementById("timer-display")

let userSeconds = Number.parseInt(prompt("Type the number of seconds"), 10)
    while(isNaN(userSeconds)){
        userSeconds = Number.parseInt(prompt("Type the number of seconds"), 10)
    }


timerDisplay.innerHTML = userSeconds
const timerFunc = setInterval(function (){
    userSeconds--;
timerDisplay.innerHTML = userSeconds
    
    if(userSeconds<=0){
    clearInterval(timerFunc)
    console.log("Time has ended")
}
}, 1000)
