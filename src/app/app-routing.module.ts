import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrevistasComponenteComponent } from './Controller/entrevistas-componente/entrevistas-componente.component';
import { CandidatosComponenteComponent } from './Controller/candidatos-componente/candidatos-componente.component';
import { PuestoDisponiblesComponeneteComponent } from './Controller/puesto-disponibles-componenete/puesto-disponibles-componenete.component';
import { PaginaErrorComponent } from './Controller/pagina-error/pagina-error.component';

const routes: Routes = [
  {path:"", component:CandidatosComponenteComponent},
  {path:"entrevista", component:EntrevistasComponenteComponent},
  {path:"puestos", component:PuestoDisponiblesComponeneteComponent},
  {path:"**", component:PaginaErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
