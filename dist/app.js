// Init projet sous npm, npm install typescript, créa fichier .ts, npx tsc "nomdufichier" > traduira TS en JS
"use Strict"; //à placer en début de code, permet meilleur check et correction d'erreurs
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
const cb = (e) => {};
//:void sert à dire qu'on s'en blc du retour de la fonction, si jamais contient un return, sera visible mais non exploitable
const bouton = document.querySelector("test"); //permet de définir le type d'élément ciblé en rajoutant as + sélection de l'élément HTML
const mdp = { motdepasse: "julien34" }; //permet de dire qu'on attend des nombres et/ou une chaîne de caractères
// Narrowing
function printId(id) {
  if (typeof id === "number") {
    console.log((id * 2).toString());
  } else {
    console.log(id.toUpperCase());
  }
}
