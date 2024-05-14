// Creiamo  un array chiedendo all'utente quanti elementi dovrà contenere e
// generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array

// creo un array vuoto
// chiedo all'utente un numero
// creo un loop for con indice da 0 a numeroUtente
//     per ogni iterazione creo un numero casuale da 1 a 100
//     uso il metodo slice() per creare una shallow copy con gli ultimi 5 elementi
//         opzionale, posso chiedere all'utente un numero da inserire all'interno del metodo slice per determinare quanti elementi dovrà contenere l'array
//     stampo la shallow copy

const nums=[];
const userNum=Number.parseInt(prompt("enter a number"), 10);

for (i=0;i<userNum;i++){
    const newNum=Math.floor(Math.random()*100) + 1;
    nums.push(newNum);
}

console.log(nums.slice(-5));