import { Component,OnInit } from '@angular/core';
import { GENERO,VINCULO } from '../models/tulpas.const';
import { loadResidentesI } from '../models/loadResidentes.interface';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';


@Component({
  selector: 'app-load-residente',
  templateUrl: './load-residente.component.html',
  styleUrls: ['./load-residente.component.css']
})
export class LoadResidenteComponent implements OnInit{


generoOptions= GENERO;
vinculoOptions = VINCULO;

  LoadRForm!: FormGroup;


constructor(private api:ApiService, private router:Router, private formBuilder: FormBuilder){}

ngOnInit(): void {

  this.LoadRForm = this.formBuilder.group({
    // Define aquí los campos de tu formulario y las validaciones
    nombreResidente : new FormControl('',Validators.required),
    apellidoResidente : new FormControl('',Validators.required),
    dniResidente : new FormControl('',Validators.required),
    fechaNacimiento : new FormControl('',Validators.required),
    edad: new FormControl('',Validators.required),
    genero: new FormControl('',Validators.required),
    medicoDeCabecera: new FormControl('',Validators.required),
    grupoSanguineo: new FormControl('',Validators.required),
    numeroDeHabitacion: new FormControl('',Validators.required),
    observacionesResidente: new FormControl('',Validators.required),
    localidadFamiliar: new FormControl('',Validators.required),
    domicilioFamiliar: new FormControl('',Validators.required),
    nombreFamiliar: new FormControl('',Validators.required),
    apellidoFamiliar: new FormControl('',Validators.required),
    numeroTelefonico: new FormControl('',Validators.required),
    dniFamiliar: new FormControl('',Validators.required),
    numeroAfiliado: new FormControl('',Validators.required),
    obraSocial: new FormControl('',Validators.required),
    vinculoConElResidente: new FormControl('',Validators.required)
  
  });
}
    



OnLoadR(form:loadResidentesI){
  this.api.loadResident(form).subscribe(data =>{
    let DataLoadR:loadResidentesI = data;
    console.log(DataLoadR);
    if (DataLoadR != null){
      alert('Gracias por agregar un nuevo residente');
      this.router.navigate([''])
    }
  })
}


}
