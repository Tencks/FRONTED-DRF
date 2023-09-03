import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { GENERICO, GENERO, TIPOMEDICAMENTO } from '../models/tulpas.const';
import { LoadMedicamentoI } from '../models/loadMedicamento.interface';
import { listaResidentesI } from '../models/listaResidentes.interface';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit{

medicamentoOptions = TIPOMEDICAMENTO;
genericoOptions = GENERICO;

 LoadMedicamentoForm !: FormGroup;

 residentes: listaResidentesI[] = [];

  constructor(private router:Router, private api:ApiService, private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.api.getAllResidents().subscribe(data =>{
      this.residentes = data;
    })
    


    this.LoadMedicamentoForm = this.formBuilder.group({

      residenteM : new FormControl('',Validators.required),
      genericMedicamento : new FormControl('',Validators.required),
      nombreMedicamento : new FormControl('',Validators.required),
      marcaMedicamento : new FormControl(''),
      pesoMedicamento : new FormControl('',Validators.required),
      cantDisponible : new FormControl('',Validators.required),
      medicionMedicamento : new FormControl('',Validators.required),
      fechaIngreso : new FormControl('',Validators.required),
      fechaCaducidad : new FormControl('',Validators.required),
      codMedicamento : new FormControl('',Validators.required),
      observacionesMedicamento : new FormControl('',Validators.required),
      derivacionesMedicamento : new FormControl('',Validators.required),


    });
      
  }

  OnLoadMedicamento(form:LoadMedicamentoI){
    this.api.LoadNewMedicamento(form).subscribe(newwMedicamento =>{
      let newMedicamento:LoadMedicamentoI = newwMedicamento;
      console.log(newMedicamento)
      if (newMedicamento != null){
        alert('Gracias por agregar un nuevo medicamento al residente');
        this.router.navigate([''])
      }
    })




  }


}
