import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConectionService } from 'src/app/services/conection.service';
import { Faltas } from 'src/app/services/interfaces/interfaces';

@Component({
  selector: 'app-faltas-presencas',
  templateUrl: './faltas-presencas.component.html',
  styleUrls: ['./faltas-presencas.component.sass']
})
export class FaltasPresencasComponent implements OnInit {

    listaFaltas: Observable<Faltas[]>;

  constructor(private conn: ConectionService) { }

  ngOnInit() {
    this.listaFaltas = this.conn.faltas(sessionStorage.getItem('id_dk'));
  }


}
