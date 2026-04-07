
import { JsonPipe } from '@angular/common';

import { Component, } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,JsonPipe,ReactiveFormsModule],

templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
usernameCtrl=new FormControl('',[ Validators.required, Validators.minLength(3)]);



// data={
//   username: "",
//   isMajor: true
// }
 //liste des etudiants




//fonctions









}
