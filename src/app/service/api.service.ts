import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {LoginI} from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { listaResidentesI } from '../models/listaResidentes.interface';
import { TokenI } from '../models/logout.interface';
import { RegisterI } from '../models/register.interface';
import { loadResidentesI } from '../models/loadResidentes.interface';
import { DetallesPacienteI } from '../models/DetallesPacienteI.interface';
import { LoadMedicamentoI } from '../models/loadMedicamento.interface';
import { listaMedicamentosI } from '../models/getMedicamentos.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private urlApi =  'http://127.0.0.1:8000/api/';
  private pacienteID: DetallesPacienteI[] = [];

  constructor(private http: HttpClient) { }


RegisterUser(form:RegisterI):Observable<RegisterI>{
  let direccion = this.urlApi + "addUser/"
  return this.http.post<RegisterI>(direccion,form)
}

 loginByEmail(form:LoginI):Observable<ResponseI> {
  let direccion = this.urlApi + "login/"
  return this.http.post<ResponseI>(direccion,form);
 }

Logout(form:TokenI):Observable<TokenI>{
  let direccion = this.urlApi + "logout/"
  return this.http.post<TokenI>(direccion,form);
}


getAllResidents(): Observable<listaResidentesI[]>{
  let direccion = this.urlApi + "residentes/"
  return this.http.get<listaResidentesI[]>(direccion);
}


setPacienteID(id : any){
  this.pacienteID = id;
}

getResidenteDetails():Observable<DetallesPacienteI>{
  let direccion = this.urlApi + "residentes/" + this.pacienteID
  return this.http.get<DetallesPacienteI>(direccion);
}

loadResident(form:loadResidentesI):Observable<loadResidentesI>{
  let direccion = this.urlApi + "residentes/"
  return this.http.post<loadResidentesI>(direccion,form);
}

//# METODO PARA CREAR UN NUEVO MEDICAMENTO

LoadNewMedicamento(form:LoadMedicamentoI):Observable<LoadMedicamentoI>{
  let direccion = this.urlApi + "medicamentosresidente/"
  return this.http.post<LoadMedicamentoI>(direccion,form)
}


//# METODO PARA CREAR UN NUEVO MEDICAMENTO


getMedicamentos():Observable<listaMedicamentosI>{
  let direccion = this.urlApi + "residentes/" + this.pacienteID + "/" + "medicamentos/"
  return this.http.get<listaMedicamentosI>(direccion);
}

}
