import { TestBed } from '@angular/core/testing';

import { GetDatasService } from './get-datas.service';

describe('GetDatasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDatasService = TestBed.get(GetDatasService);
    expect(service).toBeTruthy();
  });
});
