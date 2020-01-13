import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApostilasPageComponent } from './pages/apostilas-page/apostilas-page.component';
import { FaltasPresencasComponent } from './pages/faltas-presencas/faltas-presencas.component';
import { AndamentoCursoComponent } from './pages/andamento-curso/andamento-curso.component';
import { CalendarioAcademicoComponent } from './pages/calendario-academico/calendario-academico.component';
import { BrowserModule } from '@angular/platform-browser';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'apostilas', component: ApostilasPageComponent },
  { path: 'faltas', component: FaltasPresencasComponent },
  { path: 'acompanhamento', component: AndamentoCursoComponent },
  { path: 'calendario', component: CalendarioAcademicoComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
