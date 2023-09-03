import { Component, OnInit } from '@angular/core';
import { listaMedicamentosI } from '../models/getMedicamentos.interface';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-info-medico-foto-name',
  templateUrl: './more-info-medico-foto-name.component.html',
  styleUrls: ['./more-info-medico-foto-name.component.css']
})
export class MoreInfoMedicoFotoNameComponent implements OnInit{

  
  
  Medicamentos: listaMedicamentosI['medicamentos'] = [];



constructor(private api:ApiService, private router:Router){}

ngOnInit(): void {
  this.api.getMedicamentos().subscribe((response) => {
    if (response && response.medicamentos) {
      this.Medicamentos = response.medicamentos;
      console.log(this.Medicamentos, 'como va?');
    }
  });
}
}


