import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMatComponent } from './box-mat.component';

describe('BoxMatComponent', () => {
  let component: BoxMatComponent;
  let fixture: ComponentFixture<BoxMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
