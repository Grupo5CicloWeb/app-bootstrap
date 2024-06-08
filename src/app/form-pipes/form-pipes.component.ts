import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './form-pipes.component.html',
  styleUrl: './form-pipes.component.css'
})
export class FormPipesComponent {

  alumnos = [
    {nombre: "Edgarcito"},
    {nombre: "Sebitas"},
    {nombre: "Angelito"},
    {nombre: "Jesucito"},
    {nombre: "Viericito"},
    {nombre: "Ashlee"}
  ]

  fechaActual = new Date()

  cursos= [
    {nombre: "Moviles 1", profesor: "Silfrido Alva", precio: 2500},
    {nombre: "Inglés 2", profesor: "Gabriela Baltazar", precio: 2000},
    {nombre: "Servicio Web 1", profesor: "Damaso Lopez", precio: 1500},
    {nombre: "Gestión TI", profesor: "Marco Villa", precio: 1800}
  ]
  mostrarResultados = 0

  mostrarAlumnos(): void{
    this.mostrarResultados = 1
  }

  mostrarCursos():void {
    this.mostrarResultados = 0
  }

}
