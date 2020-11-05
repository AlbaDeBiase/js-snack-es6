// JSnack1:
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
// nome e peso.
// Stampare a schermo la bici con peso minore.

// utilizzare la sintassi es6


$(document).ready(function() {

    var bici =
    [
    {
        'nome' : 'Mountain bike',
        'peso' : 6
    },
    {
        'nome' : 'Bmx',
        'peso' : 5
    },
    {
        'nome' : 'Bici elettrica',
        'peso' : 7
    },{
        'nome' : 'Fat bike',
        'peso' : 8
    },
    ];

// Stampo l'array di bici
// console.log(bici);

// definisco il paso minimo in una variabile
    var pesoMinimo = bici[0];
// mi salvo un indice che tiene traccia del peso minore
// Ciclo tutte le bici e loro proprietà
bici.forEach((element) => {
    if(element.peso < pesoMinimo.peso) {
        pesoMinimo = element;
    }

});

console.log(pesoMinimo);
// salvo la bici corrente in una variabile

const{peso, nome}= pesoMinimo;

// Stampare a schermo la bici con peso minore.

$( "#uno" ).text( pesoMinimo.nome);
$( "#due" ).text( pesoMinimo.peso);



// devo comparare la bici corrente alla posizione uno e salvare una variabile con cui comparo le altre

})
