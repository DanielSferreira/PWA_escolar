import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-content',
  templateUrl: './cards-content.component.html',
  styleUrls: ['./cards-content.component.sass']
})
export class CardsContentComponent implements OnInit {


  @Input() title ;
  @Input() content: string;
  @Input() link: string;
  constructor() { }

  ngOnInit() {
  }

}
