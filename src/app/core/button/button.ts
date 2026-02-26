import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() icon?: string;
  @Input() severity?: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast';
  @Input() disabled: boolean = false;
  @Input() outlined: boolean = false;
  @Input() rounded: boolean = false;
  @Input() size?: 'small' | 'large';

  @Output() onClick = new EventEmitter<Event>();

  handleClick(event: Event) {
    this.onClick.emit(event);
  }
}
