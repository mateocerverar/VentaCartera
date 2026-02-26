import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '../../../charts/chart/chart';
import { CardComponent } from '../../../data/card/card';
import { TableComponent } from '../../../data/table/table';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-purchased-portfolio',
  standalone: true,
  imports: [CommonModule, ChartComponent, CardComponent, TableComponent, SelectModule, TabsModule, FormsModule],
  templateUrl: './purchased-portfolio.html',
  styleUrl: './purchased-portfolio.scss'
})
export class PurchasedPortfolioComponent implements OnInit {
  performanceData: any;
  chartOptions: any;
  selectedYear: any;
  years: any[] = [];

  portfolioTable = [
    { creditId: 'CR-MK-901', purchaseDate: '2026-01-10', amount: 35000, currentReturn: 1200, status: 'Al Día' },
    { creditId: 'CR-MK-902', purchaseDate: '2026-02-05', amount: 80000, currentReturn: 450, status: 'Al Día' },
    { creditId: 'CR-MK-855', purchaseDate: '2025-11-20', amount: 15000, currentReturn: 2100, status: 'Mora 30 días' }
  ];

  tableColumns = [
    { field: 'creditId', header: 'ID de Crédito' },
    { field: 'purchaseDate', header: 'Fecha de Compra' },
    { field: 'amount', header: 'Inversión Inicial ($)' },
    { field: 'currentReturn', header: 'Retorno Generado ($)' },
    { field: 'status', header: 'Estado Actual' }
  ];

  ngOnInit() {
    this.years = [
      { label: '2026', value: 2026 },
      { label: '2025', value: 2025 },
      { label: '2024', value: 2024 }
    ];
    this.selectedYear = 2026;

    this.performanceData = {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Rendimiento Acumulado ($)',
          data: [1200, 2500, 4100, 6000, 8500, 11200],
          fill: true,
          borderColor: '#80B828',
          backgroundColor: 'rgba(128, 184, 40, 0.2)',
          tension: 0.4
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' }
      }
    };
  }
}
