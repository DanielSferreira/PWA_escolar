import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

interface Faltas {
  id: number;
  Codigo: string;
  Data: string;
  Horario: string;
  Tipo: string;
}

@Component({
  selector: 'app-faltas-presencas',
  templateUrl: './faltas-presencas.component.html',
  styleUrls: ['./faltas-presencas.component.sass']
})
export class FaltasPresencasComponent implements OnInit {

  listaFaltas: Observable<Faltas[]>;
  url = 'https://192.168.1.5:5001/api/Faltas/';
  url2 = 'http://127.0.0.1:8000/api/faltas';
  data: any;
  data2: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listaFaltas = this.http
      .get<Faltas[]>(this.url2)
        .pipe(
          map(a=> {console.log(a);return a})
        );

  }


}
