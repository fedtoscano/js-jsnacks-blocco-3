// Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.

const nums=[];

while(nums.length<6){
    const userNum = Number.parseInt(prompt("Type a number"),10)
    if(userNum%2===1){
        nums.push(userNum)
    }

    console.log(nums)
}