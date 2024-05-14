const frutta=['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

frutta.push("pesca");

let frutto;

for(let i=0; i<frutta.length;i++){
    if(frutta[i]==="cocomero"){
        frutto = "cocomero";
    }
}

if(frutto="cocomero"){
    console.log("Trovato! Devo solo preparare il cocktail.")
} else{
    console.log("Oh no, devo uscire a comprare il cocomero!")
}