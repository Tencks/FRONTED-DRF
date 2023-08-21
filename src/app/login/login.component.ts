import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../service/api.service';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({

    usuario : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })





  constructor(private api:ApiService, private router:Router){}

  errorStatus:boolean = false;
  errorMsj:any = '';


  ngOnInit(): void {
      
  }

  onLogin(form:LoginI){
    this.api.loginByEmail(form).subscribe(data => {
      console.log(data);
      let dataResponse:ResponseI = data;
      if(dataResponse.status){
        localStorage.setItem("token",dataResponse.result.token);  
        console.log("Token:", dataResponse.result.token);
        this.router.navigate(['home'])
      } else{
        this.errorStatus = true;
        //#region this.errorMsj = dataResponse.result.error_msg;
      }
    }); 

  }



}
