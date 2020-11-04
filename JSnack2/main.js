// JSnack2: Creare un array di nomi e chiedere all'utente due numeri.
// Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

// usiamo forEach o filter



$(document).ready(function() {
// creo un array di nomi
        var nomi = ['Alba', 'Dario', 'Isabella','Maria', 'Luca'];

    // console.log(nomi);

// chiedo all'utente 2 numeri compresi tra 0 e 4
        var numero1 = parseInt(prompt('Inserisci un numero tra 0 e 4'));
        var numero2 = parseInt(prompt('Inserisci un altro numero tra 0 e 4'));

        // console.log(numero1);
        // console.log(numero2);

        var nomiFiltrati = [];

        var nuoviNomiFiltrati = nomi.filter((element,index) => {
        return numero1 <= index && numero2 >= index;

});
    console.log(nomi);
    console.log(nuoviNomiFiltrati);
})
