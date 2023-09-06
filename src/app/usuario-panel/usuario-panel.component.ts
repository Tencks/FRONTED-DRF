import { Component,OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { TokenI } from '../models/logout.interface';

@Component({
  selector: 'app-usuario-panel',
  templateUrl: './usuario-panel.component.html',
  styleUrls: ['./usuario-panel.component.css']
})
export class UsuarioPanelComponent implements OnInit{

  constructor(private api:ApiService, private router:Router){}



  ngOnInit(): void {
      
  }

  onLogout() {
    const token = localStorage.getItem("token"); // Obtener el token del localStorage
  
    if (token) {
      this.api.Logout({ token: token }).subscribe(data => {
        console.log(data);
        let tokenResponse: TokenI = data;
        console.log(tokenResponse);
  
        // Eliminar el token del localStorage después del cierre de sesión
        localStorage.removeItem("token");
        this.router.navigate(['']);
      });
    }
  }
  
}
