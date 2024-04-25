import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from './types/card';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAllCardsService {
  url = 'https://api.clashroyale.com/v1/cards';

  constructor(private httpClient: HttpClient) {}

  getCards(): Observable<Card[]> {
    const request = this.httpClient
      .get<{
        items: Card[];
      }>(this.url, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijc5ZTAxMzg5LTMyNDgtNDE3Yi04MzFmLTc0OTRkYjgzMzFiYSIsImlhdCI6MTcxMjYxODQ1MSwic3ViIjoiZGV2ZWxvcGVyL2M3MDk5MTliLWU5MzYtOTI0Ni0yNjEzLTJjNjdjZWMwZDc4NCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTEuMjQzLjEzMi4xNDEiXSwidHlwZSI6ImNsaWVudCJ9XX0.K92SzJLP5w-md0CUeWxvJ7irvca6I_O8qGpHOWNzcBYF-Tz4kyOGUGriy5xzAAfmUYT45uO84Yqv6fWe09bsMA`,
        },
      })
      .pipe(map((response) => response.items || []));

    return request;
  }
}
