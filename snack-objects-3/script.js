
// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const persone = [
    { nome: "Luca", cognome: "Rossi", età: 28 },
    { nome: "Maria", cognome: "Bianchi", età: 34 },
    { nome: "Giuseppe", cognome: "Verdi", età: 16 },
    { nome: "Anna", cognome: "Neri", età: 22 },
    { nome: "Marco", cognome: "Ferrari", età: 15 },
    { nome: "Elena", cognome: "Ricci", età: 27 },
    { nome: "Paolo", cognome: "Marini", età: 52 },
    { nome: "Francesca", cognome: "Conti", età: 13 },
    { nome: "Stefano", cognome: "Romano", età: 36 },
    { nome: "Giulia", cognome: "Gallo", età: 17 }
];

persone.forEach(persona => {
    if(persona.età>18){
        console.log(`${persona.nome} ${persona.cognome} ha ${persona.età} anni. Quindi può guidare`)
    }else{
        console.log(`${persona.nome} ${persona.cognome} ha ${persona.età} anni. Quindi non può guidare`)
    }
    
});