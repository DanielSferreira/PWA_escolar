import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaltasPresencasComponent } from './faltas-presencas.component';

describe('FaltasPresencasComponent', () => {
  let component: FaltasPresencasComponent;
  let fixture: ComponentFixture<FaltasPresencasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaltasPresencasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaltasPresencasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
