import { Component, OnInit, Input, } from '@angular/core';
import { ModalComanderService } from 'src/app/modal-comander.service';
import { ConectionService } from 'src/app/services/conection.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(private modalComander: ModalComanderService) { }

  @Input() titulo: string;

  ngOnInit() {
  }
}
