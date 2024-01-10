import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatosComponenteComponent } from './Controller/candidatos-componente/candidatos-componente.component';
import { EntrevistasComponenteComponent } from './Controller/entrevistas-componente/entrevistas-componente.component';
import { PuestoDisponiblesComponeneteComponent } from './Controller/puesto-disponibles-componenete/puesto-disponibles-componenete.component';
import { PaginaErrorComponent } from './Controller/pagina-error/pagina-error.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatosComponenteComponent,
    EntrevistasComponenteComponent,
    PuestoDisponiblesComponeneteComponent,
    PaginaErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
