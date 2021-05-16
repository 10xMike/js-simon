// JS Simon Says
// Un alert espone 5 numeri generati casualmente
// Parte un timer di 30 secondi
// L'utente inserisce uno alla volta i numeri che ha visto, dopo 30 secondi, attraverso un prompt
// Inseriti i 5 numeri, il software dice quanti e quali dei numeri sono stati individuati

// 1. funzione per generare i numeri casuali
function rng(min, max) {
    return Math.ceil(Math.random()*(max-min)+min);
}

let simonArray = [];

while (simonArray.length < 5) {
    var genNum = rng(1, 10);
    if (!simonArray.includes(genNum)) {
        simonArray.push(genNum);
    }
}

console.log("I numeri generati sono: " +  simonArray);
alert("I numeri generati sono: " +  simonArray);

// 2. Timer di 30 secondi

setTimeout(function() {
    var commonNumbers = [];
    for(var i = 0; i < 5, i++;) {
        var userNumber =  Number(prompt('Inserisci un numero'));
        if (simonArray.includes(userNumber)) {
        commonNumbers.push(userNumber);
    }
}
    alert("Hai individuato " + commonNumbers.length + " numeri, i numeri sono: " + commonNumbers);
}, 30000);