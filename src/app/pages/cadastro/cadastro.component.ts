import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass']
})
export class CadastroComponent implements OnInit {

  constructor() { }
  Forms = new FormGroup({
    usuario: new FormControl(''),
    senha: new FormControl(''),
  });
  usuario = 'dan';
  senha = 'senha';
  ngOnInit() {
  }
  carrega(a) {
    if (this.usuario === this.Forms.controls.usuario.value) {
      console.log(this.Forms);
      console.log(a);
    }
  }

}
