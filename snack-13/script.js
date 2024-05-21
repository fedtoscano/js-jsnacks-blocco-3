// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

function invertChar(num){
    let numString = num.toString();
    const invertedNum= []
    for(i=numString.length; i>=0; i--){
        invertedNum.push(numString[i])
    }
    console.log(invertedNum.join(""))
}