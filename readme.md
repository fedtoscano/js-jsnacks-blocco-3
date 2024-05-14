Abbiamo un frigorifero pieno di frutta: 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero

2. aggiungere la pesca all'array della frutta
        aggiungo la pesca col metodo push()

3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
        posso creare un ciclo che itera lungo gli array, in caso di match con la stringa "cocomero" assegno un valore ad una variabile definita precedentemente
            se la variabile contiene quel valore, allora stampo esito positivo
            altrimenti stampo esito negativo

********************************************************************************************************************

Creiamo  un array chiedendo all'utente quanti elementi dovrà contenere e
generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array

creo un array vuoto
chiedo all'utente un numero
creo un loop for con indice da 0 a numeroUtente
    per ogni iterazione creo un numero casuale da 1 a 100 e lo pusho nell'array
    uso il metodo slice() per creare una shallow copy con gli ultimi 5 elementi
        opzionale, posso chiedere all'utente un numero da inserire all'interno del metodo slice per determinare quanti elementi dovrà contenere l'array
    stampo la shallow copy

********************************************************************************************************************

Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
    creo due array con dei numeri, uno diverso dall'altro
        creo un ciclo for con l'indice che parte dalla lunghezza dell'array minore e arriva alla lunghezza dell'array maggiore
            per ogni iterazione del ciclo for, pusho nell'array minore un numero random
