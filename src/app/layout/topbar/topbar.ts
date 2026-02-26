import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, ToolbarModule, ButtonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss'
})
export class TopbarComponent {
  @Input() title: string = 'Venta de Cartera';
  @Input() userName: string = 'User';

  @Output() onMenuToggle = new EventEmitter<void>();

  toggleMenu() {
    this.onMenuToggle.emit();
  }
}
