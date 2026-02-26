import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class CardComponent {
  @Input() header: string = '';
  @Input() subheader: string = '';
}
