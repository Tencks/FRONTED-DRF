import { Component , OnInit} from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { listaResidentesI } from '../models/listaResidentes.interface';
import { DetallesPacienteI } from '../models/DetallesPacienteI.interface';

@Component({
  selector: 'app-more-info-medico',
  templateUrl: './more-info-medico.component.html',
  styleUrls: ['./more-info-medico.component.css']
})
export class MoreInfoMedicoComponent implements OnInit {

  pacientes:listaResidentesI[] =[];
  pacienteDetalles:DetallesPacienteI | undefined;


constructor(private api:ApiService, private router:Router){}





ngOnInit(): void {
    
  this.api.getResidenteDetails().subscribe(pacienteDetalles =>{
    this.pacienteDetalles = pacienteDetalles
    console.log(this.pacienteDetalles, 'hola')
  })
  
  
  

}


OnLoadSO(){
  this.router.navigate(['addSemanalO'])
}




}
