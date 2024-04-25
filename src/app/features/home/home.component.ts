import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../core/components/button/button.component';
import { TutorialSectionComponent } from '../../core/components/tutorial-section/tutorial-section.component';
import { FooterComponent } from '../../core/components/footer/footer.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    TutorialSectionComponent,
  ],
  selector: 'home-component',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
