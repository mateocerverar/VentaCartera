import { Component, Input } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule, TagModule],
  templateUrl: './tag.html',
  styleUrl: './tag.scss'
})
export class TagComponent {
  @Input() value?: string;
  @Input() severity?: 'success' | 'info' | 'warn' | 'danger' | 'contrast' | 'secondary';
  @Input() rounded: boolean = false;
  @Input() icon?: string;
}
