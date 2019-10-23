import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente';
  descripcion:string;
  listaEstudiantes:string[];

  constructor() {
    this.descripcion = "Taller de aplicaciones en Internet";
    this.listaEstudiantes = ['Carlos', 'Edson', 'Jhaziel', 'Saul', 'Boris', 'Fausto', 'Alan'];
    console.log(this.descripcion);
    console.log(this.listaEstudiantes);
  }
}
