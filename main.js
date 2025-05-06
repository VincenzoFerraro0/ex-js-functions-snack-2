
// 🏆 Snack 1
// Crea una funzione che somma due numeri.

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(a, b){
    return a + b
}
 console.log(somma(1,5))

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const varSomma = function(a, b){
    return a + b
}

console.log(varSomma(3, 9))

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
const arrSomma = (a, b) => a + b

console.log(arrSomma(3, 5))

// 🏆 Snack 2

// Crea una arrow function che calcola il quadrato di un numero.
const quadrato = num => num ** 2

console.log(quadrato(8))

// 🏆 Snack 3

// Crea una funzione eseguiOperazione
const moltiplica = (a, b) => a * b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b)
console.log(eseguiOperazione(2, 5, moltiplica))

// 🏆 Snack 4
// Crea un generatore di funzioni creaTimer

function creaTimer


