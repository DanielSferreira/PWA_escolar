import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-andamento-curso',
  templateUrl: './andamento-curso.component.html',
  styleUrls: ['./andamento-curso.component.sass']
})
export class AndamentoCursoComponent implements OnInit {

  public cores: Color[]= [{backgroundColor: ['green','gray']}]
  public GraficoDeRodaTextos: Label[] = ['Andamento do Curso', 'Falta cursar'];
  public GraficoDeRodaValores: number[] = [ 5, 74 ];
  public GraficoTipo: ChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
