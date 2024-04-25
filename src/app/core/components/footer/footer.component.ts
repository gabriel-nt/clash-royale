import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'footer-component',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
})
export class FooterComponent {}
