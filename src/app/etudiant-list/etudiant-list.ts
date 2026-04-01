import { etudiant } from './../etudiant/etudiant';
import { Component, input, output } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { App } from '../app';
@Component({
  selector: 'app-etudiant-list',
  imports: [],
  templateUrl: './etudiant-list.html',
  styleUrl: './etudiant-list.css',
})
export class EtudiantList {
  //variables
etudiants= input.required<Etudiant[]>();
edit = output<string>();
delete = output<string>();
detail = output<string>();





//fonctions
onDelete(etudiantId:string){
  this.delete.emit(etudiantId);

};
onEdit(etudiantId:string){
  this.edit.emit(etudiantId);
};
onDetail(etudiantId:string){
  this.detail.emit(etudiantId);
}

}
