import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario-academico',
  templateUrl: './calendario-academico.component.html',
  styleUrls: ['./calendario-academico.component.sass']
})
export class CalendarioAcademicoComponent implements OnInit {

  constructor() { }

  
  mes = this.pegames();

  eventos = [
    {Data:'01/01',Descricao:'Feriado'},
    {Data:'04/01',Descricao:'Dia Mundial do Braille'},
    {Data:'14/01',Descricao:'Reunião dos pais'},
    {Data:'15/01',Descricao:'Dia do Adulto. Sim, esse feriado Existe!'},
  ]
  pegames() {
    let meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    return meses[new Date().getMonth()];
  }
  ngOnInit() {
  }

}
