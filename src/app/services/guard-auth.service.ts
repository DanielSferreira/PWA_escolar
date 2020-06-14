import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConectionService } from 'src/app/services/conection.service';

@Injectable()
export class GuardAuthService implements CanActivate {

  constructor(private conn: ConectionService, private router: Router) {}
  private token = sessionStorage.getItem('token_pwa_escolar');

  private checaLogin(url: string): boolean {
    if (this.conn.estaLogado) {
      return true;
    }
    this.conn.endereco = url;

    this.router.navigate(['/login']);
//    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.checaLogin(url);
  }
}
