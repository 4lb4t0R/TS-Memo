// Init projet sous npm, npm install typescript, créa fichier .ts, npx tsc "nomdufichier" > traduira TS en JS
"use Strict"; //à placer en début de code, permet meilleur check et correction d'erreurs
console.log("Yo bg");

// Typage de TS

const a: string = "yo"; //tag en tant que chaîne de caractères
const n: number = 3; //tag en tant que nombre
const b: boolean = true; //tag en tant que booléen
const d: null = null; //tag en tant que valeur nulle
const arr: string[] = ["yo", "yo", "yo"]; //tag en tant que tableau composé de chaînes de caractères
const tabl: any = ["yo", 3]; //tag en tant que fourre-tout, à éviter mais utile quand mix de caractères à définir
const user: { firstname: string; lastname: string } = {
  firstname: "Julian",
  lastname: "Assange",
}; //définit valeur attendues dans un objet ; ajout du ? rend optionnel, ex: lastname?:string sera optionnel, user pourra fonctionner sans
// [key:string] : string au lieu de lastname signifie qu'on attend une clé de caractères contenant des caractères, est dynamique
const date: Date = new Date(); //définit format spécifique et permet de le décla direct
const cb: Function = (e: MouseEvent): void => {};
//:void sert à dire qu'on s'en blc du retour de la fonction, si jamais contient un return, sera visible mais non exploitable
const bouton = document.querySelector("test") as HTMLButtonElement; //permet de définir le type d'élément ciblé en rajoutant as + sélection de l'élément HTML
const mdp: { motdepasse: string | number } = { motdepasse: "julien34" }; //permet de dire qu'on attend des nombres et/ou une chaîne de caractères

// Narrowing

function printId(id: number | string) {
  if (typeof id === "number") {
    console.log((id * 2).toString());
  } else {
    console.log(id.toUpperCase());
  }
}
//permet d'utiliser des if else et trigger différentes réactions selon différentes saisies avec typeof instanceof

// Alias et Generic
