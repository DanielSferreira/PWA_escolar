import { TestBed } from '@angular/core/testing';

import { ModalComanderService } from './modal-comander.service';

describe('ModalComanderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalComanderService = TestBed.get(ModalComanderService);
    expect(service).toBeTruthy();
  });
});
