import { TestBed } from '@angular/core/testing';

import { ResidenteInfoService } from './residente-info.service';

describe('ResidenteInfoService', () => {
  let service: ResidenteInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidenteInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
