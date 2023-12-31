import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listaSemanalOI } from 'src/app/models/getSemanalO.interface';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view-observaciones',
  templateUrl: './view-observaciones.component.html',
  styleUrls: ['./view-observaciones.component.css']
})
export class ViewObservacionesComponent implements OnInit {


  SemanalOb: listaSemanalOI['signosVitales'] = [];


constructor(private api:ApiService, private router:Router){}




ngOnInit(): void {

  this.api.getSemanalO().subscribe((response) => {
    if (response && response.signosVitales) {
      this.SemanalOb = response.signosVitales;
      console.log(this.SemanalOb, 'muestra las observaciones semanales');
    }
  });
}




}
