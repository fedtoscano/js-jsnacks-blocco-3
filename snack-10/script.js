// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const arr1=[1,2,3,4,5]
const arr2=[1,2,3,4,5,6,7,8,9,10]

let longArray;
let shortArray;
if(arr1.length>arr2.length){
    longArray = arr1;
    shortArray = arr2;
}else{
    longArray = arr2;
    shortArray = arr1;
}

while(shortArray.length<longArray.length){
    shortArray.push(Math.floor(Math.random()*10) +1);

    console.log(shortArray.length, longArray.length)
}