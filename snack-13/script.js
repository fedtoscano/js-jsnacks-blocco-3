// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

function invertChar(num){
    let numString = num.toString();
    // console.log(numString)

    for(i=1; i<numString.length; i++){
        const invertedNum=[]
        invertedNum.push(numString[-i])
        console.log(invertedNum)
    }

}