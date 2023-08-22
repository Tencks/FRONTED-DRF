import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {LoginI} from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { listaResidentesI } from '../models/listaResidentes.interface';
import { TokenI } from '../models/logout.interface';



@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private urlApi =  'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }



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




}
