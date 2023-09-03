import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { listaResidentesI } from '../models/listaResidentes.interface';
import { loadResidentesI } from '../models/loadResidentes.interface';

import { Router } from '@angular/router';
import { TokenI } from '../models/logout.interface';
import { ResidenteInfoService } from '../residente-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  data: any[] = [];

  pacientes:listaResidentesI[]=[];


  constructor(private api:ApiService, private router:Router, private reidentesService: ResidenteInfoService){}

  ngOnInit(): void {
    
     this.api.getAllResidents().subscribe(pacientes =>{
      console.log(pacientes);
      this.pacientes = pacientes;
     })
  }

  MoreInfo(pacienteID: listaResidentesI['id']){
    this.api.setPacienteID(pacienteID)
    this.router.navigate(['topbar',pacienteID]);
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
  


loadNew(){
  this.router.navigate(['load']);
}

loadNewMedicamento(){
  this.router.navigate(['loadMedicacion']);
}






}
