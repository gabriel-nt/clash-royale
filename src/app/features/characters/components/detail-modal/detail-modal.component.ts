import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DefaultImgDirective } from '../../../../core/directives/placeholder-img/placeholder-img.directive';
import { Card } from '../../../../core/services/get-all-cards/types/card';

@Component({
  standalone: true,
  imports: [CommonModule, DefaultImgDirective],
  selector: 'detail-modal-component',
  styleUrls: ['./detail-modal.component.scss'],
  templateUrl: './detail-modal.component.html',
})
export class DetailModalComponent implements OnInit {
  isOpen = false;

  @Input() data!: Card;
  @Output() modalClosed = new EventEmitter<void>();

  ngOnInit() {
    setTimeout(() => {
      this.isOpen = true;
    }, 100);
  }

  close() {
    this.isOpen = false;

    setTimeout(() => {
      this.modalClosed.emit();
    }, 600);
  }
}
