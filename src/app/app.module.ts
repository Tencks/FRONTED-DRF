import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { MatStepperModule } from '@angular/material/stepper'; // Importa el módulo de stepper
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa el módulo de form field
import { MatButtonModule } from '@angular/material/button'; // Importa el módulo de botón


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoadResidenteComponent } from './load-residente/load-residente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackButtonComponent } from './back-button/back-button.component';
import { HmedicoComponent } from './hmedico/hmedico.component';
import { MoreInfoMedicoComponent } from './more-info-medico/more-info-medico.component';
import { MoreInfoMedicoFotoNameComponent } from './more-info-medico-foto-name/more-info-medico-foto-name.component';
import { StockMedicamentosComponent } from './stock-medicamentos/stock-medicamentos.component';
import { StockMLocalComponent } from './stock-mlocal/stock-mlocal.component';
import { CuracionesHComponent } from './curaciones-h/curaciones-h.component';
import { AddMedicamentoComponent } from './add-medicamento/add-medicamento.component';
import { LoadObservacionComponent } from './observaciones/load-observacion/load-observacion.component';
import { ViewObservacionesComponent } from './observaciones/view-observaciones/view-observaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RegisterComponent,
    NavbarComponent,
    TopbarComponent,
    LoadResidenteComponent,
    BackButtonComponent,
    HmedicoComponent,
    MoreInfoMedicoComponent,
    MoreInfoMedicoFotoNameComponent,
    StockMedicamentosComponent,
    StockMLocalComponent,
    CuracionesHComponent,
    AddMedicamentoComponent,
    LoadObservacionComponent,
    ViewObservacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule
    MatStepperModule, // Agrega MatStepperModule
    MatFormFieldModule, // Agrega MatFormFieldModule
    MatButtonModule // Agrega MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
