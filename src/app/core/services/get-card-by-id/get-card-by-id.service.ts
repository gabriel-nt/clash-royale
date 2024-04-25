import { Injectable } from '@angular/core';
import { Card } from '../get-all-cards/types/card';

@Injectable({
  providedIn: 'root',
})
export class GetCardByIdService {
  private data: Card[] = [];

  set cards(cards: Card[]) {
    this.data = cards;
  }

  getCardById(id: number): Card | undefined {
    const data = this.data.find((card) => card.id === id);

    return data;
  }
}
