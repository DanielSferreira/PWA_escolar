import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ConectionService } from 'src/app/services/conection.service';

interface User {
  email: string;
  password: string;
  remember_me: boolean;
}
interface Resposne {
  success: {
    token: string;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  unidade = [
    {id: 1, unidade: 'Belford Roxo'},
    {id: 2, unidade: 'Nova Iguaçu'},
  ];

  login = new FormGroup({
    user: new FormControl('', [Validators.minLength(6), Validators.maxLength(6)]),
    password: new FormControl('', [Validators.minLength(4), Validators.maxLength(4)]),
    remember_me: new FormControl(true),
  });
  constructor(private conn: ConectionService) { }

  ngOnInit() {
    this.conn.verificaToken();
  }
  makeLogin() {
    this.conn.login(this.login.value);
  }
}
