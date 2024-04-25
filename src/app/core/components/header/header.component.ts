import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink, RouterOutlet],
  selector: 'header-component',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  constructor() {
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/icons/facebook.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/icons/twitter.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'youtube',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/icons/youtube.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/icons/instagram.svg'
      )
    );
  }
}
