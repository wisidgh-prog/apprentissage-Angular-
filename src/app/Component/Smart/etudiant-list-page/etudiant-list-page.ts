import { Component, inject } from '@angular/core';
import { EtudiantList } from "../../UI/etudiant-list/etudiant-list";
import { etudiant } from "../../UI/etudiant/etudiant";
import { EtudiantService } from '../../../services/etudiantService';
import { Etudiant } from '../../../model/etudiant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-list-page',
  imports: [EtudiantList, etudiant],
  templateUrl: './etudiant-list-page.html',
  styleUrl: './etudiant-list-page.css',
})
export class EtudiantListPage {
etudiants:Etudiant[]= []
currentEtudiant : null | Etudiant= null;

//injection de etudiant service
etudiantService = inject(EtudiantService);
//injection d'un service de navigation
router = inject(Router);
//constructeur
constructor(){
  this.etudiants =(this.etudiantService.getEtudiants());
}



showDetail(etudiantId:string){

this.currentEtudiant = this.etudiants.find(etudiant => etudiant.id === etudiantId) || null;
}

onDelete(etudiantId:string){
  //console.log(etudiantId);
this.currentEtudiant = null;


this.etudiants = this.etudiants.filter(etudiant => etudiant.id !== etudiantId);

};

onEdit(etudiantId:string){
  //naviguer vers la page d'edition de l'etudiant
  this.router.navigate(['/etudiants/edit', etudiantId]);
};
}
