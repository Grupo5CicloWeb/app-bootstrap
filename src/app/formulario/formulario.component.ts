import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  resultado = "Esperando que se ingrese datos...";
  urlImage = "https://aprende.com/wp-content/uploads/2021/05/Como-calcular-el-IMC-con-calculadora-de-forma-manual-940x580.jpg"

  mostrarMensaje = false;

  formImc = {
    talla: null,
    peso: null      
  }

  pacientesList: Paciente = []

  calcularImc():void{
    let tallam = Number(this.formImc.talla) / 100
    let valorImc = Number(this.formImc.peso) / (tallam * tallam)
    var diagnostico = ""
    if(valorImc <= 18.5){
      diagnostico = "peso inferior"
    }else if(valorImc <= 24.9){
      diagnostico = "normal"
    }else if(valorImc <= 29.9){
      diagnostico = "sobrepeso"
    }else if(valorImc <= 34.9){
      diagnostico = "obesidad"
    }else{
      diagnostico = "obesidad extrema"
    }
    this.resultado = "Su imc es: "+ valorImc.toFixed(2).toString()+", "+diagnostico
    this.pacientesList.push({
      id: this.pacientesList.length +1,
      valor: valorImc.toFixed(2).toString(),
      diagnostico: diagnostico
    });
    //console.log(this.pacientesList);
    this.mostrarMensaje = true;
  }

}
type Paciente = Array<{id: number, valor: string, diagnostico: string }>
