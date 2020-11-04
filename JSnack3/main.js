// JSnack3: A partire da un array di oggetti,
// creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position"
// che contiene una lettera casuale.


$(document).ready(function() {

const abitazioni = [
{
'nome':'villa',
'colore' : 'blu',
'superficie' : 110
},
{
'nome':'attico',
'colore' : 'verde',
'superficie' : 160
},
{
'nome':'loft',
'colore' : 'rosa',
'superficie' : 130
},
{
'nome':'mansarda',
'colore' : 'giallo',
'superficie' : 80
}
];


const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const generatePosition = () => {
    const letters =  'abcdefghijklmnopqrstuvwxyz';
    const letter = letters[randomNumber(0, letters.length -1)];

console.log("lettera generata", letter);
    return letter;
};

const nuoveAbitazioni = abitazioni.map((element) =>{

    const copyElement = {
    ...element,
    position: generatePosition()
};
    return copyElement
})

console.log("array originale", abitazioni);
console.log("array nuovo", nuoveAbitazioni);

})
// abitazioni.forEach((element, index, array) => {
// console.log(`
// ${element.nome}
// ${element.colore}
// ${element.superficie}
// `)
// });

// const cloneAbitazioni = [...abitazioni];
// var arr = [{'obj1':1}, {'obj2':2}];
// var clone = abitazioni.slice(0);
// console.log(clone);
//
// // aggiungere una nuova proprietà all'array
// abitazioni.numeroBalconi;
//
// })
