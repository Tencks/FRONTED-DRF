import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { listaResidentesI } from '../models/listaResidentes.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  data: any[] = [];



  constructor(private apiService: ApiService){}

  ngOnInit(): void {
     this.apiService.getAllResidents().subscribe(data =>{
      console.log(data)
     })
  }

  

}
