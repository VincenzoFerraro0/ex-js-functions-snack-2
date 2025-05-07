
// 🏆 Snack 1
// Crea una funzione che somma due numeri.

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// function somma(a, b) {
//     return a + b;
// }
// console.log(somma(1, 5))

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// const varSomma = function (a, b) {
//     return a + b
// }

// console.log(varSomma(3, 9))

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
// const arrSomma = (a, b) => a + b

// console.log(arrSomma(3, 5))

// 🏆 Snack 2

// Crea una arrow function che calcola il quadrato di un numero.
// const quadrato = num => num ** 2;

// console.log(quadrato(8))

// 🏆 Snack 3

// Crea una funzione eseguiOperazione
// const moltiplica = (a, b) => a * b;

// const eseguiOperazione = (a, b, operatore) => {
//     operatore(a, b)
// }



// 🏆 Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

// function creaTimer(ms) {
//     return function () {
//         setTimeout(() => {
//             console.log('tempo scaduto!')
//         }, ms)
//     }
// }

// const timer5s = creaTimer(5000);
// timer5s(); 

// 🏆 Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// function stampaOgniSecondo(messaggio) {
//     setInterval(() => {
//         console.log(messaggio);
//     }, 1000);
// }

// stampaOgniSecondo("Ciao, sto stampando ogni secondo!");

// 🏆 Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

// function creaContatoreAutomatico(ms) {
//     let count = 0;
//     return function() {
//         setInterval(() => {
//             count++;
//             console.log(`il contatore è arrivato a ${count}`);
//         }, ms);
//     };
// }
// const avvia = creaContatoreAutomatico(1000);
// avvia()

// 🏆 Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

// function eseguiEferma(messaggio, avvio, stop){
    
//     const id = setInterval( () => {
//         console.log(messaggio)
//     },avvio)

//     setTimeout(() =>{
//         clearInterval(id)
//     },stop)
// }

// eseguiEferma('Eseguo', 1000, 10000)

// 🎯 Snack 8 (Bonus)
// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

function contoAllaRovescia(numero){
    let count = numero;
    const id = setInterval(()=>{
        if(count > 0){
            count --
            console.log(count)
        }else{
           console.log('tempo Scaduto')
           clearInterval(id)
        }
    },1000)
}
const avvia = contoAllaRovescia(10)

