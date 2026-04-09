import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-etudiantform',
  imports: [ReactiveFormsModule],
  templateUrl: './etudiantform.html',
  styleUrl: './etudiantform.css',
})
export class Etudiantform {

  form= new FormGroup({
    id: new FormControl(''),
    nom: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    prenom: new FormControl('',[Validators.required, Validators.minLength(3)]),
    age: new FormControl('',[Validators.required, Validators.min(18),Validators.max(50)]),
    classe: new FormControl('',Validators.required),
  })

}
