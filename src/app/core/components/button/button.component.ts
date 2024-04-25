import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'button-component',
  styleUrls: ['./button.component.scss'],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text!: string;
}
