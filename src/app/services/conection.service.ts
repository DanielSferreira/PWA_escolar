import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { Router } from '@angular/router';
import { User, ResponseLogin, Modulos, Unidades, Faltas, Aulas, infos, Parcelas } from './interfaces/interfaces';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  constructor(private http: HttpClient,
              private route: Router,
            ) { }

  private token = sessionStorage.getItem('token_pwa_escolar');
  public url = 'http://192.168.1.3:8000/api/';
  private httpOptions = {
    headers : new HttpHeaders({
      Authorization: 'Bearer ' + sessionStorage.getItem('token_pwa_escolar'),
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    })
  };
  estaLogado = false;
  endereco: string;
  verificaToken() {
    if (this.token !== null) {
      this.estaLogado = true;
      return this.route.navigate(['home']);
    }
    if (this.token !== undefined) {
      return this.route.navigate(['home']);
    }
  }
  login(usuario: User) {
    const loginUrl = this.url + 'aluno/login';

    return this.http.post(loginUrl, JSON.stringify(usuario), this.httpOptions)
    .toPromise()
    .then((res: ResponseLogin) => {
      sessionStorage.setItem('token_pwa_escolar', res.passe);
      sessionStorage.setItem('id_dk', res.id_dk);
      sessionStorage.setItem('id_om', res.id_om);
      this.estaLogado = true;
      if (this.endereco) {
        this.route.navigate([this.endereco]);
        this.endereco = '';
      }
    })
    .catch(this.handleError);
  }

  logout(): void {
    this.estaLogado = false;
    sessionStorage.removeItem('token_pwa_escolar');
    sessionStorage.removeItem('id_dk');
    sessionStorage.removeItem('id_om');
    document.location.reload();
  }

  modulos(idLocal: string): Observable<Modulos[]> {
    const urlFinal = this.url + 'aluno/getModulos';
    return this.http.post<Modulos[]>(urlFinal, {id: idLocal}, this.httpOptions)
      .pipe(map(a => {console.log(a); return a; }), catchError(this.handleError));
  }
  faltas(idLocal: string): Observable<Faltas[]> {
    const urlFinal = this.url + 'aluno/getFaltas';
    return this.http.post<Faltas[]>(urlFinal, {id: idLocal}, this.httpOptions)
      .pipe(map(a => {console.log(a); return a; }), catchError(this.handleError));
  }
  aulas(idLocal: string): Observable<Aulas[]> {
    const urlFinal = this.url + 'aluno/getAulas';
    return this.http.post<Aulas[]>(urlFinal, {id: idLocal}, this.httpOptions)
      .pipe(map(a => {console.log(a); return a; }), catchError(this.handleError));
  }
  infoAulas(idLocal, idDk: string): Observable<infos> {
    const urlFinal = this.url + 'aluno/getAulasInfo';
    return this.http.post<infos>(urlFinal, {id: idLocal, id_dk: idDk}, this.httpOptions)
      .pipe(map(a => {console.log(a); return a; }), catchError(this.handleError));
  }
  parcelas(idLocal: string): Observable<Parcelas[]> {
    const urlFinal = this.url + 'aluno/getMensalidades';
    return this.http.post<Parcelas[]>(urlFinal, {id_dk: idLocal}, this.httpOptions)
      .pipe(map(a => {console.log(a); return a; }), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      console.error(error.status);
      console.error(error.error);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
