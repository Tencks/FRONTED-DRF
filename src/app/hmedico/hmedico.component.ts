import { Component , OnInit} from '@angular/core';
import { listaResidentesI } from '../models/listaResidentes.interface';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hmedico',
  templateUrl: './hmedico.component.html',
  styleUrls: ['./hmedico.component.css']
})
export class HmedicoComponent implements OnInit{


  pacientes:listaResidentesI[]=[];
  
constructor(private api:ApiService, private router:Router){}


ngOnInit(): void {
    
  this.api.getAllResidents().subscribe(pacientes =>{
    console.log(pacientes);
    this.pacientes = pacientes;
   })

}


MoreInfo(pacienteID: listaResidentesI['id']){
  this.api.setPacienteID(pacienteID)
  this.router.navigate(['homeMedicoInfo',pacienteID]);
}

}
