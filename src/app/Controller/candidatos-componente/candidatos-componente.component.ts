import { Component } from '@angular/core';
import { CandidatosInterface } from 'src/app/Model/CandidatosInterface';

@Component({
  selector: 'app-candidatos-componente',
  templateUrl: './candidatos-componente.component.html',
  styleUrls: ['./candidatos-componente.component.css']
})
export class CandidatosComponenteComponent implements CandidatosInterface{
  //Atributos
  nombre: string = "";
  apellidos: string = "";
  dni: string = "";
  direccion: string = "";
  telefono: string = "";
  mail: string = "";
  fchNac: string = "";
  
}
