import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoModalMenuComponent } from './botao-modal-menu.component';

describe('BotaoModalMenuComponent', () => {
  let component: BotaoModalMenuComponent;
  let fixture: ComponentFixture<BotaoModalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoModalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoModalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
