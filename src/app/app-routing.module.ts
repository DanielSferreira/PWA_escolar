import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GuardAuthService } from './services/guard-auth.service';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FirstAccessComponent } from './pages/login/first-access/first-access.component';
import { ApostilasPageComponent } from './pages/apostilas-page/apostilas-page.component';
import { FaltasPresencasComponent } from './pages/faltas-presencas/faltas-presencas.component';
import { AndamentoCursoComponent } from './pages/andamento-curso/andamento-curso.component';
import { CalendarioAcademicoComponent } from './pages/calendario-academico/calendario-academico.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';

const route: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'  },
  { path: 'login/PrimeiroAcesso', component: FirstAccessComponent },
  {
    path: '',  canActivate: [GuardAuthService], children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login/PrimeiroAcesso', component: FirstAccessComponent },
      { path: 'apostilas', component: ApostilasPageComponent },
      { path: 'faltas', component: FaltasPresencasComponent },
      { path: 'acompanhamento', component: AndamentoCursoComponent },
      { path: 'calendario', component: CalendarioAcademicoComponent },
      { path: 'financeiro', component: FinanceiroComponent },
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
