import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterI } from '../models/register.interface';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { CARGO } from '../models/tulpas.const';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cargoClass = CARGO;

  RegisterForm = new FormGroup({

    email : new FormControl('',Validators.required),
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    password1 : new FormControl('',Validators.required),
    cargo : new FormControl('',Validators.required),
    
  })


constructor(private api:ApiService, private router:Router){}






  ngOnInit(): void {
      
  }
  
  OnRegister(form: RegisterI){
    this.api.RegisterUser(form).subscribe(data =>{
      console.log(data);
      let dataRegister:RegisterI = data;
      if (dataRegister != null){
        alert('Gracias por registrarte');
        this.router.navigate([''])
      }
    })
  }



}
