import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoModalMenuComponent } from './componentes/botao-modal-menu/botao-modal-menu.component';
import { ModalMenuComponent } from './componentes/modal-menu/modal-menu.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CardsContentComponent } from './componentes/cards-content/cards-content.component';

import { HomeComponent } from './pages/home/home.component';
import { ApostilasPageComponent } from './pages/apostilas-page/apostilas-page.component';
import { FaltasPresencasComponent } from './pages/faltas-presencas/faltas-presencas.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FirstAccessComponent } from './pages/login/first-access/first-access.component';
import { CalendarioAcademicoComponent } from './pages/calendario-academico/calendario-academico.component';
import { AndamentoCursoComponent } from './pages/andamento-curso/andamento-curso.component';
import { LoginComponent } from './pages/login/login.component';
import { ModalComanderService } from './modal-comander.service';

import { ConectionService } from './services/conection.service';
import { GuardAuthService } from './services/guard-auth.service';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule, MatOptionModule } from '@angular/material/';

import { ChartsModule } from 'ng2-charts/';
import { PoModule, PoTableModule } from '@portinari/portinari-ui';
import { PoCalendarModule, PoChartModule } from '@portinari/portinari-ui';
import { BoxMatComponent } from './componentes/box-mat/box-mat.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';




@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    MenuComponent,
    HomeComponent,
    CardsContentComponent,
    ApostilasPageComponent,
    FaltasPresencasComponent,
    ModalMenuComponent,
    BotaoModalMenuComponent,
    AndamentoCursoComponent,
    CalendarioAcademicoComponent,
    LoginComponent,
    FirstAccessComponent,
    BoxMatComponent,
    FinanceiroComponent,
  ],
  imports: [
    PoChartModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    PoModule,
    PoCalendarModule,
    PoTableModule,
    MatSelectModule,
    MatOptionModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    GuardAuthService,
    ModalComanderService,
    ConectionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
