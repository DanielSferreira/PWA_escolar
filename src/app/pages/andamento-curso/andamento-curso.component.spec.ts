import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndamentoCursoComponent } from './andamento-curso.component';

describe('AndamentoCursoComponent', () => {
  let component: AndamentoCursoComponent;
  let fixture: ComponentFixture<AndamentoCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndamentoCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndamentoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
