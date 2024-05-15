// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const arr=[];
let sum = 0

while(sum<50){
    const userNum = Number.parseInt(prompt("Type a number"),10);
    while(isNaN(userNum)){
        userNum = Number.parseInt(prompt("Type a number"),10);
    }
    arr.push(userNum);
    sum+=userNum;

    console.log(`${userNum} has been added to the array`);
}

console.log(`Stop! The sum is now ${sum}`);