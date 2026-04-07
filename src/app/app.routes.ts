import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { EtudiantListPage } from './Component/Smart/etudiant-list-page/etudiant-list-page';
import { EtudianEditPage } from './Component/Smart/etudian-edit-page/etudian-edit-page';

export const routes: Routes = [
  {path:'etudiants', component:EtudiantListPage},
  {path:'etudiants/edit/:EtuId', component:EtudianEditPage},
  {path:'', redirectTo:'etudiants', pathMatch:'full'},
];
