import { Card } from './../../core/services/get-all-cards/types/card';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  TransferState,
  inject,
  makeStateKey,
} from '@angular/core';
import {
  CommonModule,
  NgOptimizedImage,
  isPlatformBrowser,
  isPlatformServer,
} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from '../../core/components/header/header.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { GetAllCardsService } from '../../core/services/get-all-cards/get-all-cards.service';
import { DefaultImgDirective } from '../../core/directives/placeholder-img/placeholder-img.directive';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { GetCardByIdService } from '../../core/services/get-card-by-id';

const cardsKey = makeStateKey<any[]>('cards');

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FooterComponent,
    HeaderComponent,
    NgOptimizedImage,
    DefaultImgDirective,
    DetailModalComponent,
    NgxSkeletonLoaderModule,
  ],
  selector: 'characters-component',
  styleUrl: './characters.component.scss',
  templateUrl: './characters.component.html',
})
export class CharactersComponent implements OnInit {
  private isFecthing = true;

  cards: any[] = [];
  currentCard?: Card = undefined;
  getAllCardsService = inject(GetAllCardsService);
  getCardByIdService = inject(GetCardByIdService);

  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private transferState: TransferState
  ) {}

  get isFecthingCards() {
    return this.isFecthing;
  }

  showDetailsModal(id: number) {
    this.currentCard = this.getCardByIdService.getCardById(id);
  }

  closeDetailsModal() {
    this.currentCard = undefined;
  }

  ngOnInit(): void {
    if (isPlatformServer(this.platformID)) {
      this.getAllCardsService.getCards().subscribe((cards) => {
        this.cards = cards;
        this.transferState.set(cardsKey, cards);
      });
    }

    if (isPlatformBrowser(this.platformID)) {
      this.cards = this.transferState.get(cardsKey, []);
      this.getCardByIdService.cards = this.cards;
      this.isFecthing = false;
    }
  }
}
