import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CardsContentComponent } from './componentes/cards-content/cards-content.component';
import { ApostilasPageComponent } from './pages/apostilas-page/apostilas-page.component';
import { FaltasPresencasComponent } from './pages/faltas-presencas/faltas-presencas.component';
import { ModalMenuComponent } from './componentes/modal-menu/modal-menu.component';
import { BotaoModalMenuComponent } from './componentes/botao-modal-menu/botao-modal-menu.component';
import { ModalComanderService } from './modal-comander.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/';

import { HttpClientModule } from '@angular/common/http';
import { AndamentoCursoComponent } from './pages/andamento-curso/andamento-curso.component';
import { ChartsModule } from 'ng2-charts/';
import { PoModule, PoTableModule, PoChartComponent } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';

import {
  PoCalendarModule,
  PoChartModule
  } from '@portinari/portinari-ui';
import { PoChartCircular } from '@portinari/portinari-ui/lib/components/po-chart/po-chart-types/po-chart-circular/po-chart-circular';
import { CalendarioAcademicoComponent } from './pages/calendario-academico/calendario-academico.component';




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
    RouterModule.forRoot([]),
  ],
  providers: [
    ModalComanderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
