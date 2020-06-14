import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApostilasPageComponent } from './apostilas-page.component';

describe('ApostilasPageComponent', () => {
  let component: ApostilasPageComponent;
  let fixture: ComponentFixture<ApostilasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApostilasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApostilasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
