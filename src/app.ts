// Init projet sous npm, npm install typescript, créa fichier .ts, npx tsc "nomdufichier" > traduira TS en JS, npx tsc --watch pour compiler en live
"use Strict";
import { ListFormat } from "../node_modules/typescript/lib/typescript";

//à placer en début de code, permet meilleur check et correction d'erreurs
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

//Alias

type User = { firstname: string; lastname: string };
const usheure: User = { firstname: "Wolfgang", lastname: "VonGoethe" }; //Crée un raccourci, similaire à  un mixin en CSS

//Generic

function identity<ArgType>(arg: ArgType): ArgType {
  return arg;
}
const aa = identity<number>(3); //sert à paramétrer et affiner grâce aux <> qui déterminent ce que l'on rentre et ce que l'on attend, ce que ça doit être

function consoleSize<Type extends { length: number }>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
const abb = consoleSize(["3", 2]); //sans extends length, renverrait une erreur, permet de forcer et assimiler type

// readonly devant une propriété la rend inmodifiable par une erreur JS

//Les Classes

class A {
  private a = 3; //rend propriété de la classe uniquement accessible dans la classe; #a rend privée ++, remplace private
  protected b = 4; //rend propriété uniquement accessible dans la classe + aux childrens
  public c = 5; //rend propriété accessible pour tlm depuis n'importe où, est par défaut
}
//à coupler avec this pour devenir un crack

//Tuples

// est un tableau défini immuable

type ListItems = [string, number];
const x: ListItems = ["fraise", 3]; //avec type, définit longueur+contenu du tableau, puis on le remplit, le rend immuable et h24 défini

//Enum

enum STEPS {
  Intro = "Intro",
  Developpement = "Developpement",
  Conclusion = "Conclusion",
  Ouverture = "Ouverture",
}
const step: STEPS = STEPS.Developpement;

//Fichiers de déclaration

document; //CTRL+Click renvoie vers un fichier de décla contenant toutes les commandes possibles, utilisé par l'auto-compléteur
export class Point {
  x = 0;
  y = 2;
  move(x: number, y: number) {
    this.x += x;
    this.y += y;
    return this;
  }
} //grâce à paramètres passé dans tsconfig, crée un dossier de décla avec le JS compilé
