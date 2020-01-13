import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import * as _ from 'lodash';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
interface Modulos {
  id: number;
  modulo: string;
  curso: string;
  cargaHoraria: number;
}
interface ModulosPHP {
  Id: number;
  Modulo: string;
  Curso: string;
  CargaHoraria: number;
}

@Component({
  selector: 'app-apostilas-page',
  templateUrl: './apostilas-page.component.html',
  styleUrls: ['./apostilas-page.component.sass']
})



export class ApostilasPageComponent implements OnInit {

  url = 'https://192.168.1.5:5001/api/Alunos/ListarCursosAluno/1';
  url2 = 'http://127.0.0.1:8000/api/apostilas';
  errorUrl = 'aaaaaa';
  conteudo: Observable<Modulos[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.conteudo = this.http
    .get<Modulos[]>(this.url2).pipe(map(a=>{console.log(a);return a}),catchError(this.handleError));
  }
  updates() {
    this.conteudo = this.http
    .get<Modulos[]>(this.url2);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
    }
}
