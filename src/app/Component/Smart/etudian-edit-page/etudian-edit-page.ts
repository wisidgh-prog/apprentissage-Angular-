import { Etudiant } from './../../../model/etudiant.model';
import { EtudiantService } from './../../../services/etudiantService';
import { Component, computed, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { etudiant } from '../../UI/etudiant/etudiant';

@Component({
  selector: 'app-etudian-edit-page',
  imports: [etudiant],
  templateUrl: './etudian-edit-page.html',
  styleUrl: './etudian-edit-page.css',
})
export class EtudianEditPage {
  //variable
  route= inject(ActivatedRoute);
  etudiantService = inject(EtudiantService);
  // etudiant:Etudiant | null = null;

  EtuId= input.required<string>();
  etudiant = computed(() => {
    const id = this.EtuId();
    return this.etudiantService.getEtudiant(id);


  });

constructor(){
  //observable
   /*this.route.params
    .pipe(map(params=>{const EtuId = params['EtuId'];
    return this.etudiantService.getEtudiant(EtuId);

   }),
   takeUntilDestroyed())
    .subscribe({
     next: (etudiant) => {
      this.etudiant = etudiant;

    }, error: (err) => {
     this.etudiant = null;

             },
   })*/
}













}
