


import { Etudiant } from '../../../model/etudiant.model';
import { Component, input, output } from '@angular/core';
import { ClassePipe } from '../../../classe-pipe';


@Component({
  selector: 'app-etudiant',
  imports: [ClassePipe],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class etudiant {
etudiant= input.required<Etudiant>()

}
