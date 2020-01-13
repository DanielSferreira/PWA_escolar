import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalComanderService } from 'src/app/modal-comander.service';

@Component({
  selector: 'app-botao-modal-menu',
  templateUrl: './botao-modal-menu.component.html',
  styleUrls: ['./botao-modal-menu.component.sass']
})
export class BotaoModalMenuComponent implements OnInit {

  constructor(private modalComander: ModalComanderService) { }

  podeAbrirModal = false;

  AvisaModal() {
    console.log('Aa');
    this.podeAbrirModal = !this.podeAbrirModal;
    this.modalComander.alternaModal(this.podeAbrirModal);
  }
  ngOnInit() {
    this.modalComander.mostrandoModalP.subscribe(tit => this.podeAbrirModal = tit);
  }
}
