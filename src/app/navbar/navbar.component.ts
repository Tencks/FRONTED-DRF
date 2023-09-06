import { Component,OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { TokenI } from '../models/logout.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

constructor(private api:ApiService, private router:Router){}

ngOnInit(): void {
    
}


CreateResidenteGO(){
  this.router.navigate(['load'])
}

CreateMedicamentoGO(){
  this.router.navigate(['loadMedicacion'])
}

HomeResidenteGO(){
  this.router.navigate([''])
}

HomeMedicoGO(){
  this.router.navigate(['homeMedico'])
}

HomeMedicamentosGO(){
  this.router.navigate(['loadMedicacionR'])

}

HomeMedicamentoLocalGO(){
  this.router.navigate(['loadMedicacionL'])

}
HomeUsuarioGO(){
  this.router.navigate(['usuarioPanel'])

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
