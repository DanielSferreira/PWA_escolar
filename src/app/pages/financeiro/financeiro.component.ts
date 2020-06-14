import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Parcelas } from 'src/app/services/interfaces/interfaces';
import { ConectionService } from 'src/app/services/conection.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.sass']
})
export class FinanceiroComponent implements OnInit {

  constructor(private conn: ConectionService) { }

  parcelas: Observable<Parcelas[]>;

  ngOnInit() {
    this.parcelas = this.conn.parcelas(sessionStorage.getItem('id_dk'));
  }

}
