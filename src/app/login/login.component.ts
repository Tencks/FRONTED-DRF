import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../service/api.service';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';

import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TokenI } from '../models/logout.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({

    user_id : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  logoutButton = new FormGroup({
    token : new FormControl('', Validators.required)
  })




  constructor(private api:ApiService, private router:Router){}

  errorStatus:boolean = false;
  errorMsj:any = '';


  ngOnInit(): void {
      
  }


  onLogin(form: LoginI) {
    this.api.loginByEmail(form).subscribe(data => {
      console.log(data);
      let dataResponse: ResponseI = data;
      
      if (dataResponse.token !== '') {
        localStorage.setItem("token", dataResponse.result.token);  
        console.log("Login successful");
        this.router.navigate([HomeComponent]);
      } else {
        this.errorStatus = true;
        this.errorMsj = "No se encontraron datos en la respuesta.";
      }
    });
  }

  onLogout(form: TokenI){
    this.api.Logout(form).subscribe(data =>{
      console.log(data);
      let tokenResponse:TokenI = data;
      console.log(tokenResponse);
    })
  }

}
