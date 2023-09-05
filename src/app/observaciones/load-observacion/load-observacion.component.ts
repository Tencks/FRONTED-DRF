import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { listaResidentesI } from 'src/app/models/listaResidentes.interface';
import { LoadSemanalOI } from 'src/app/models/loadSemanalO.interface';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-load-observacion',
  templateUrl: './load-observacion.component.html',
  styleUrls: ['./load-observacion.component.css']
})
export class LoadObservacionComponent implements OnInit {

LoadSemanalOForm !: FormGroup;
residentes: listaResidentesI[] = [];



  constructor(private api:ApiService, private router:Router, private fomBuilder: FormBuilder){}


  ngOnInit(): void {
    this.api.getAllResidents().subscribe(data =>{
      this.residentes = data;
    })
    
    this.LoadSemanalOForm = this.fomBuilder.group({

      residenteS : new FormControl('',Validators.required),
      fechaConsulta : new FormControl('',Validators.required),
      tensionArterial : new FormControl('',Validators.required),
      glucemia : new FormControl('',Validators.required),
      saturacion : new FormControl('',Validators.required),
      pulso : new FormControl('',Validators.required),
      observacionesSemanales : new FormControl('',Validators.required),
      derivacionesSemanales : new FormControl('',Validators.required),

    })



  }

  OnLoadSemanalO(form:LoadSemanalOI){
    this.api.LoadNewSemanalO(form).subscribe(data2 =>{
      let SemanalO:LoadSemanalOI = data2;
      console.log(SemanalO)
      if (SemanalO != null){
        alert('Gracias por agregar la nueva observación semanal');
        this.router.navigate(['homeMedico'])
      }
    })




  }




}
