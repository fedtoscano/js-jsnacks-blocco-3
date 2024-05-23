// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.

const cars = [
    { marca: "Toyota", modello: "Corolla", alimentazione: "benzina" },
    { marca: "Ford", modello: "Focus", alimentazione: "diesel" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "gpl" },
    { marca: "Tesla", modello: "Model 3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Honda", modello: "Civic", alimentazione: "benzina" },
    { marca: "BMW", modello: "3 Series", alimentazione: "diesel" },
    { marca: "Renault", modello: "Clio", alimentazione: "gpl" },
    { marca: "Nissan", modello: "Leaf", alimentazione: "elettrico" },
    { marca: "Audi", modello: "A4", alimentazione: "benzina" },
    { marca: "Mercedes-Benz", modello: "C-Class", alimentazione: "diesel" },
    { marca: "Peugeot", modello: "308", alimentazione: "gpl" },
    { marca: "Hyundai", modello: "Ioniq", alimentazione: "elettrico" },
    { marca: "Kia", modello: "Sportage", alimentazione: "metano" },
    { marca: "Chevrolet", modello: "Cruze", alimentazione: "benzina" }
];

const autoBenzina = cars.filter((car) => {
    if(car.alimentazione === "benzina"){
        return true;
    }
})

const autoDiesel = cars.filter((car) => {
    if(car.alimentazione === "diesel"){
        return true;
    }
})

const autoRimanenti=cars.filter((car) => {
    if(car.alimentazione!=="benzina" && car.alimentazione!=="diesel"){
        return true
    }
})

console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoRimanenti);