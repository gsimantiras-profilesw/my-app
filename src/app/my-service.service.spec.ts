import { TestBed } from '@angular/core/testing';

import { MyServiceService } from './my-service.service';
import { HttpClient } from '@angular/common/http';
import { observable, Observable, defer } from 'rxjs';

describe('MyServiceService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let myService: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    myService = new MyServiceService(<any>httpClientSpy);
  });

  it('should be created', () => {
    const service: MyServiceService = TestBed.get(MyServiceService);
    expect(service).toBeTruthy();
  });

  it('should return expected res (HttpClient called once)', () => {
    const expectedRes: any[] =
      [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

    httpClientSpy.get.and.returnValue(asyncData(expectedRes));

    myService.get().subscribe(
      res => expect(res).toEqual(expectedRes, 'expected res'),
      fail => expect(fail).toContain('error')
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
