import { Component } from '@angular/core';
import { PuestoDisponiblesInterface } from 'src/app/Model/Puestos-DisponiblesInterface';

@Component({
  selector: 'app-puesto-disponibles-componenete',
  templateUrl: './puesto-disponibles-componenete.component.html',
  styleUrls: ['./puesto-disponibles-componenete.component.css']
})
export class PuestoDisponiblesComponeneteComponent implements PuestoDisponiblesInterface{
  puesto: string = "";
  disponible: boolean = false;
  empresa: string = "";

}
