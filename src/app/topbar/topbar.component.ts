import { Component,OnInit } from '@angular/core';
import { ResidenteInfoService } from '../residente-info.service';
import { listaResidentesI } from '../models/listaResidentes.interface';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { DetallesPacienteI } from '../models/DetallesPacienteI.interface';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  pacientes:listaResidentesI[] =[];
  pacienteDetalles:DetallesPacienteI | undefined;

  constructor(private residentesService:ResidenteInfoService, private router:Router, private api:ApiService, private route:ActivatedRoute){}

Back(){
  this.router.navigate(['../'])
}



  ngOnInit(): void {    
     
    
    this.api.getResidenteDetails().subscribe(pacienteDetalles =>{
      this.pacienteDetalles = pacienteDetalles
      console.log(this.pacienteDetalles, 'hola')
    })
    
    
    
  

  

}
}