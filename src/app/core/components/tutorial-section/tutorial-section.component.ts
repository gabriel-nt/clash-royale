import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
  booleanAttribute,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent, MatIconModule],
  selector: 'tutorial-section-component',
  styleUrls: ['./tutorial-section.component.scss'],
  templateUrl: './tutorial-section.component.html',
})
export class TutorialSectionComponent {
  @Input() className!: string;
  @Input() buttonText!: string;
  @Input() description!: string;
  @Input() characterClassName?: string;
  @Input() characterImagePath!: string;
  @Input() screenshotImagePath!: string;
  @Input({ transform: booleanAttribute }) screenshootLeft!: boolean;

  @ContentChild(TemplateRef)
  public title!: TemplateRef<any>;
}
