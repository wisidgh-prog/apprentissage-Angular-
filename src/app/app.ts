
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test';
import { Etudiant } from './model/etudiant.model';
import { etudiant } from './etudiant/etudiant';
import { EtudiantList } from './etudiant-list/etudiant-list';

@Component({
  selector: 'app-root',
  imports: [etudiant,EtudiantList],

templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {

etudiants:Etudiant[]= [

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




] //liste des etudiants
currentEtudiant : null | Etudiant= null;





//fonctions

showDetail(etudiantId:string){

  this.currentEtudiant = this.etudiants.find(etudiant => etudiant.id === etudiantId) || null;
}

onDelete(etudiantId:string){
  //console.log(etudiantId);
this.currentEtudiant = null;
this.etudiants =
this.etudiants.filter(etudiant => etudiant.id !== etudiantId)

};
onEdit(etudiantId:string){
  console.log(etudiantId);
};







}
