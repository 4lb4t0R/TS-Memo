// Init projet sous npm, npm install typescript, créa fichier .ts, npx tsc "nomdufichier" > traduira TS en JS, npx tsc --watch pour compiler en live
"use Strict";
//à placer en début de code, permet meilleur check et correction d'erreurs
console.log("Yo bg");
// Typage de TS
const a = "yo"; //tag en tant que chaîne de caractères
const n = 3; //tag en tant que nombre
const b = true; //tag en tant que booléen
const d = null; //tag en tant que valeur nulle
const arr = ["yo", "yo", "yo"]; //tag en tant que tableau composé de chaînes de caractères
const tabl = ["yo", 3]; //tag en tant que fourre-tout, à éviter mais utile quand mix de caractères à définir
const user = {
    firstname: "Julian",
    lastname: "Assange",
}; //définit valeur attendues dans un objet ; ajout du ? rend optionnel, ex: lastname?:string sera optionnel, user pourra fonctionner sans
// [key:string] : string au lieu de lastname signifie qu'on attend une clé de caractères contenant des caractères, est dynamique
const date = new Date(); //définit format spécifique et permet de le décla direct
const cb = (e) => { };
//:void sert à dire qu'on s'en blc du retour de la fonction, si jamais contient un return, sera visible mais non exploitable
const bouton = document.querySelector("test"); //permet de définir le type d'élément ciblé en rajoutant as + sélection de l'élément HTML
const mdp = { motdepasse: "julien34" }; //permet de dire qu'on attend des nombres et/ou une chaîne de caractères
// Narrowing
function printId(id) {
    if (typeof id === "number") {
        console.log((id * 2).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
const usheure = { firstname: "Wolfgang", lastname: "VonGoethe" }; //Crée un raccourci, similaire à  un mixin en CSS
//Generic
function identity(arg) {
    return arg;
}
const aa = identity(3); //sert à paramétrer et affiner grâce aux <> qui déterminent ce que l'on rentre et ce que l'on attend, ce que ça doit être
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const abb = consoleSize(["3", 2]); //sans extends length, renverrait une erreur, permet de forcer et assimiler type
// readonly devant une propriété la rend inmodifiable par une erreur JS
//Les Classes
class A {
    constructor() {
        this.a = 3; //rend propriété de la classe uniquement accessible dans la classe; #a rend privée ++, remplace private
        this.b = 4; //rend propriété uniquement accessible dans la classe + aux childrens
        this.c = 5; //rend propriété accessible pour tlm depuis n'importe où, est par défaut
    }
}
const x = ["fraise", 3]; //avec type, définit longueur+contenu du tableau, puis on le remplit, le rend immuable et h24 défini
//Enum
var STEPS;
(function (STEPS) {
    STEPS["Intro"] = "Intro";
    STEPS["Developpement"] = "Developpement";
    STEPS["Conclusion"] = "Conclusion";
    STEPS["Ouverture"] = "Ouverture";
})(STEPS || (STEPS = {}));
const step = STEPS.Developpement;
//Fichiers de déclaration
document; //CTRL+Click renvoie vers un fichier de décla contenant toutes les commandes possibles, utilisé par l'auto-compléteur
export class Point {
    constructor() {
        this.x = 0;
        this.y = 2;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
        return this;
    }
} //grâce à paramètres passé dans tsconfig, crée un dossier de décla avec le JS compilé
