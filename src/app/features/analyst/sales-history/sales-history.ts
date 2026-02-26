import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '../../../charts/chart/chart';
import { CardComponent } from '../../../data/card/card';
import { TableComponent } from '../../../data/table/table';

@Component({
  selector: 'app-sales-history',
  standalone: true,
  imports: [CommonModule, ChartComponent, CardComponent, TableComponent],
  templateUrl: './sales-history.html',
  styleUrl: './sales-history.scss'
})
export class SalesHistoryComponent implements OnInit {
  salesData: any;
  chartOptions: any;

  tableData = [
    { quarter: 'Q1', totalSales: 1500000, creditsSold: 120, status: 'Completado' },
    { quarter: 'Q2', totalSales: 2100000, creditsSold: 185, status: 'Completado' },
    { quarter: 'Q3', totalSales: 1800000, creditsSold: 150, status: 'En Proceso' }
  ];

  tableColumns = [
    { field: 'quarter', header: 'Trimestre' },
    { field: 'totalSales', header: 'Ventas Totales ($)' },
    { field: 'creditsSold', header: 'Créditos Vendidos' },
    { field: 'status', header: 'Estado' }
  ];

  ngOnInit() {
    this.salesData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Volumen de Ventas ($)',
          backgroundColor: '#80B828', // Primary
          data: [1500000, 2100000, 1800000, 0]
        },
        {
          label: 'Objetivo',
          backgroundColor: '#00693E', // Secondary
          data: [1200000, 1500000, 1500000, 1500000]
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
  }
}
