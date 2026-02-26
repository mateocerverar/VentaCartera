import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './chart.html',
  styleUrl: './chart.scss'
})
export class ChartComponent {
  @Input() type: 'bar' | 'pie' | 'line' | 'doughnut' = 'bar';
  @Input() data: any;
  @Input() options: any;
}
