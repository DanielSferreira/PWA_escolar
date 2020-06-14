import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { ConectionService } from 'src/app/services/conection.service';
import { Modulos } from './../..//services/interfaces/interfaces';

@Component({
  selector: 'app-apostilas-page',
  templateUrl: './apostilas-page.component.html',
  styleUrls: ['./apostilas-page.component.sass']
})

export class ApostilasPageComponent implements OnInit {

  conteudo: Observable<Modulos[]>;

  constructor(private con: ConectionService,
            ) { }

  ngOnInit() {
    this.conteudo = this.con.modulos(sessionStorage.getItem('id_om'));
    }
}
