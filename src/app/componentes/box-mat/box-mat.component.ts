import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-mat',
  templateUrl: './box-mat.component.html',
  styleUrls: ['./box-mat.component.sass']
})
export class BoxMatComponent implements OnInit {

  @Input() curso: string;
  @Input() carga: string;

  constructor() { }

  ngOnInit() {
  }

}
