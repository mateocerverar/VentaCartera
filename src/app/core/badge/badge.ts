import { Component, Input } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule, BadgeModule],
  templateUrl: './badge.html',
  styleUrl: './badge.scss'
})
export class BadgeComponent {
  @Input() value?: string | number;
  @Input() severity?: 'success' | 'info' | 'warn' | 'danger' | 'contrast' | 'secondary';
  @Input() size?: 'large' | 'xlarge';
}
