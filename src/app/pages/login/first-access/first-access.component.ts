import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConectionService } from 'src/app/services/conection.service';
interface User {
  name: string;
  email: string;
  password: string;
  c_password: string;
}

interface Resposne {
  success: {
    token: string;
  };
}
@Component({
  selector: 'app-first-access',
  templateUrl: './first-access.component.html',
  styleUrls: ['./first-access.component.sass']
})
export class FirstAccessComponent implements OnInit {
  constructor(private conn: ConectionService) { }

  cursos = [
    { id: 1, nome: 'Informática' },
    { id: 2, nome: 'Administração' },
    { id: 3, nome: 'Design Gráfico' },
    { id: 4, nome: 'Farmácia' },
    { id: 5, nome: 'Desenvolvedor de Games' },
  ];
  unidade = [
    { id: 1, nome: 'Belford Roxo' },
    { id: 2, nome: 'Nilopolis' },
    { id: 3, nome: 'Nova Iguaçu' },
  ];
  form = new FormGroup({
    name: new FormControl('', Validators.minLength(5)),
    email: new FormControl('', [Validators.minLength(6), Validators.maxLength(6)]),
    password: new FormControl('', [Validators.minLength(4), Validators.maxLength(4)]),
    c_password: new FormControl('', [Validators.minLength(4), Validators.maxLength(4)]),


    unidade: new FormControl(''),
    curso: new FormControl('')
  });

  postAluno() {
    // this.conn.register(this.form.value);
  }
  ngOnInit() {
  }

}
