import { Component, OnInit, Input, } from '@angular/core';
import { ModalComanderService } from 'src/app/modal-comander.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(private modalComander: ModalComanderService) { }



  @Input() titulo: string;


  // algo = false;

  // ativaClasse = false;

  // Clica() {
  //   this.ativaClasse = !this.ativaClasse;
  // }

  ngOnInit() {
    // this.modalComander.mostrandoModalP.subscribe(tit => this.algo = tit);
    // console.log(this.algo);
  }
}
