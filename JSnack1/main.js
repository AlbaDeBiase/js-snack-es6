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


    bici.forEach((element) => {
    console.log(`
    ${element.peso}
`);
});


    var pesoMinimo = bici[0].peso;
//     var indice = 0;
//
// if (element < pesoMinimo) {
// }
//
// var filteredbici = bici.filter((element) => {
// return element < pesoMinimo
// });
//
// console.log(filteredbici);
})
