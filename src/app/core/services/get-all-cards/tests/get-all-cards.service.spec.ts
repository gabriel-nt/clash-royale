import {
  asyncData,
  asyncError,
} from '../../../testing/async-observable-helper';
import { Card } from '../types/card';
import { GetAllCardsService } from './../get-all-cards.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let getAllCardsService: GetAllCardsService;

describe('GetAllCardsService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    getAllCardsService = new GetAllCardsService(httpClientSpy);
  });

  it('should return a list of cards', (done: DoneFn) => {
    const expectedCards = [
      {
        name: 'Ballon',
        iconUrls: {
          medium:
            'https://api-assets.clashroyale.com/cards/300/qBipxLo-3hhCnPrApp2Nn3b2NgrSrvwzWytvREev0CY.png',
        },
      },
    ] as Card[];

    httpClientSpy.get.and.returnValue(asyncData({ items: expectedCards }));

    getAllCardsService.getCards().subscribe({
      next: (response) => {
        expect(response).toEqual(expectedCards);
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should return an empty list of cards', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(asyncData({}));

    getAllCardsService.getCards().subscribe({
      next: (response) => {
        expect(response).toEqual([]);
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    getAllCardsService.getCards().subscribe({
      next: () => done.fail('expected an error, not cards'),
      error: (error) => {
        expect(error.message).toContain('404');
        done();
      },
    });
  });
});
