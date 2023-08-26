import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { listaResidentesI } from '../models/listaResidentes.interface';
import { loadResidentesI } from '../models/loadResidentes.interface';

import { Router } from '@angular/router';
import { TokenI } from '../models/logout.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  data: any[] = [];

  pacientes:loadResidentesI[]=[];


  constructor(private api:ApiService, private router:Router){}

  ngOnInit(): void {
    
     this.api.getAllResidents().subscribe(data =>{
      console.log(data);
      let pacientes:loadResidentesI[]=data;
      console.log(this.pacientes)
     })
  }

  onLogout() {
    const token = localStorage.getItem("token"); // Obtener el token del localStorage
  
    if (token) {
      this.api.Logout({ token: token }).subscribe(data => {
        console.log(data);
        let tokenResponse: TokenI = data;
        console.log(tokenResponse);
  
        // Eliminar el token del localStorage después del cierre de sesión
        localStorage.removeItem("token");
        this.router.navigate(['']);
      });
    }
  }
  

}
