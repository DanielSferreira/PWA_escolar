import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Aulas, infos } from 'src/app/services/interfaces/interfaces';
import { ConectionService } from 'src/app/services/conection.service';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-andamento-curso',
  templateUrl: './andamento-curso.component.html',
  styleUrls: ['./andamento-curso.component.sass']
})
export class AndamentoCursoComponent implements OnInit {

  public begin = '0';
  public faltas = '0';

  public cores: Color[] = [{backgroundColor: ['green', 'gray']}];
  public GraficoDeRodaTextos: Label[] = ['Andamento do Curso', 'Falta cursar'];
  public GraficoDeRodaValores: number[] = [ 0, 0 ];
  public GraficoTipo: ChartType = 'pie';

  public aulas: Observable<Aulas[]>;
  public infos: Observable<infos>;
  public totalDeAulas = 0;

  constructor(private conn: ConectionService) { }

  ngOnInit() {
    this.aulas = this.conn.aulas(sessionStorage.getItem('id_om'));
    this.infos = this.conn.infoAulas(sessionStorage.getItem('id_om'), sessionStorage.getItem('id_dk'));
    this.infos.subscribe(i => {this.begin = i.primeiroDiaAula.data; this.faltas = i.quant.quantidade; });
    this.aulas.subscribe( r => this.totalDeAulas = r.length );
   }

   atualizaGrafico() {
     // tslint:disable-next-line: radix
     this.GraficoDeRodaValores = [parseInt(this.begin), parseInt(this.faltas)];
   }
}
