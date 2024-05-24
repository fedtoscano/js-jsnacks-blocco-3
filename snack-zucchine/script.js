// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
    { varieta: 'Nera di Milano', peso: 341.23, lunghezza: 14.58 },
    { varieta: 'Romanesca', peso: 287.45, lunghezza: 19.75 },
    { varieta: 'Fiorentina', peso: 458.12, lunghezza: 22.36 },
    { varieta: 'Tonda', peso: 132.67, lunghezza: 25.98 },
    { varieta: 'Lunga fiorentina', peso: 376.54, lunghezza: 28.45 },
    { varieta: 'Striata d\'Italia', peso: 231.78, lunghezza: 11.23 },
    { varieta: 'Bianca triestina', peso: 314.89, lunghezza: 17.56 },
    { varieta: 'Gialla', peso: 459.31, lunghezza: 12.67 },
    { varieta: 'Rugosa friulana', peso: 278.44, lunghezza: 26.89 },
    { varieta: 'Patisson', peso: 387.56, lunghezza: 29.12 }
]


let somma = 0
zucchine.forEach(zucchina => {
    somma += zucchina.peso

});
console.log(`La somma del peso di tutte le zucchine è: ${somma.toFixed(2)}g`)


const zucchineAssolutamenteNellaMedia = []
const zucchinGigantiOltremisura = []
zucchine.map((zucchina) => {
    if(zucchina.lunghezza < 15)
        zucchineAssolutamenteNellaMedia.push(zucchina)
    else
        zucchinGigantiOltremisura.push(zucchina)
})

console.log(zucchineAssolutamenteNellaMedia)
console.log(zucchinGigantiOltremisura)

let sommaZucchine=0
zucchineAssolutamenteNellaMedia.forEach(zucchina => {
    sommaZucchine += zucchina.peso

});
console.log(`La somma del peso di tutte le zucchine nella media è: ${sommaZucchine.toFixed(2)}g`)

let sommaZucchineDue=0
zucchinGigantiOltremisura.forEach(zucchina => {
    sommaZucchineDue += zucchina.peso

});
console.log(`La somma del peso di tutte le zucchine giganti è: ${sommaZucchineDue.toFixed(2)}g`)