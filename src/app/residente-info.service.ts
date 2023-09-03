import { Injectable } from '@angular/core';
import { listaResidentesI } from './models/listaResidentes.interface';

@Injectable({
  providedIn: 'root'
})
export class ResidenteInfoService {

  private pacientes: listaResidentesI[] = [];

  setPacientes(pacientes: listaResidentesI[]) {
    this.pacientes = pacientes;
  }



  getPacientesInfo() {
    return this.pacientes;
  }

  
  constructor() { }
}
