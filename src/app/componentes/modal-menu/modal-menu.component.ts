import { Component, OnInit } from '@angular/core';
import { ModalComanderService } from '../../modal-comander.service';
@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrls: ['./modal-menu.component.sass']
})
export class ModalMenuComponent implements OnInit {

  constructor(private modalComander: ModalComanderService) { }
  // algo = this.modalComander.nome;
  alternaModal = false;
  alternarModal() {
    this.alternaModal = !this.alternaModal;
    this.modalComander.alternaModal(this.alternaModal);
  }
  // recebePermicao() {

  // }
  ngOnInit() {
    this.modalComander.mostrandoModalP.subscribe(tit => this.alternaModal = tit);

  }

}
