const secretaire = ['sec1','sec2','sec3','sec4','sec5','sec6'];
const jours = ['lundi','mardi','mercredi','jeudi','vendredi'];
const postes =  ['F', 'F','F', 'HDJ', 'CS', 'T'];

let personel  = [];

let personne = {};
let personne2 ={};
let personne3 ={};

personne.secretaire = 'sec1';
personne.present = jours;
personne.postes = [];
personne.absent =[];

personne2.secretaire = 'sec2';
personne2.present = jours;
personne2.postes = [];
personne2.absent =[];

personne3.secretaire = 'sec3';
personne3.present = jours;
personne3.postes = [];
personne3.absent =['lundi', 'mercredi'];

personel = [personne,personne2,personne3];

var amountToGrab = 3;


var ids = [];

for (var i = 0; i < amountToGrab; ++i)
{
    var random = Math.floor(Math.random() * postes.length);
    var elementID = postes.splice(random, 1);
console.log(random)}
var json = JSON.stringify(personne);
console.log(json);
var json2 = JSON.stringify(personne2);
console.log(json2);
var json3 = JSON.stringify(personne3);
console.log(json3);

console.log(personel)