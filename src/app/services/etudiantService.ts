import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { etudiant } from '../Component/UI/etudiant/etudiant';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
 //liste des etudiants
 private etudiants:Etudiant[]= [

{
    "id":"1",
    "nom":"OODG",
    "prenom":"Marcel ",
    "age":20,
    "classe":"M2"

},
{
    "id":"2",
    "nom":"SGW",
    "prenom":"Wisdom ",
    "age":20,
    "classe":"M2"

},
{
    "id":"3",
    "nom":"XLM",
    "prenom":"Lodowa ",
    "age":20,
    "classe":"M2"

},
{
    "id":"5",
    "nom":"VIP",
    "prenom":"Wizi ",
    "age":20,
    "classe":"M2"

}




]

//fonctions

getEtudiant(id:string){
 return this.etudiants.find((etudiant )=> etudiant.id === id) || null;
}
deleteEtudiant(id:string){
this.etudiants = this.etudiants.filter((etudiant) => etudiant.id !== id);
}

getEtudiants(){
   return this.etudiants;
}




















constructor() {}

}
