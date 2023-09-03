import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoadResidenteComponent } from './load-residente/load-residente.component';
import { HmedicoComponent } from './hmedico/hmedico.component';
import { MoreInfoMedicoComponent } from './more-info-medico/more-info-medico.component';
import { StockMLocalComponent } from './stock-mlocal/stock-mlocal.component';
import { StockMedicamentosComponent } from './stock-medicamentos/stock-medicamentos.component';
import { AddMedicamentoComponent } from './add-medicamento/add-medicamento.component';
import { CuracionesHComponent } from './curaciones-h/curaciones-h.component';

const routes: Routes = [
  {path: '',redirectTo:'login', pathMatch:'full'},
  {path:'login', component : LoginComponent},
  {path: 'home', component : HomeComponent},
  {path: 'register', component : RegisterComponent},
  {path:'topbar/:id', component: TopbarComponent},
  {path: 'load',component:LoadResidenteComponent},
  {path: 'homeMedico', component : HmedicoComponent},
  {path: 'homeMedicoInfo/:id', component : MoreInfoMedicoComponent},
  {path: 'loadMedicacionL', component : StockMLocalComponent},
  {path: 'loadMedicacionR', component : StockMedicamentosComponent},
  {path: 'loadMedicacion', component : AddMedicamentoComponent},
  {path: 'curaciones', component : CuracionesHComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent,HomeComponent,RegisterComponent,TopbarComponent,LoadResidenteComponent]