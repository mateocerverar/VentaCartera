import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../../data/table/table';
import { ButtonComponent } from '../../../core/button/button';
import { CardComponent } from '../../../data/card/card';

@Component({
  selector: 'app-discarded-credits',
  standalone: true,
  imports: [CommonModule, TableComponent, ButtonComponent, CardComponent],
  templateUrl: './discarded-credits.html',
  styleUrl: './discarded-credits.scss'
})
export class DiscardedCreditsComponent {
  selectedCredits: any[] = [];

  tableData = [
    { creditId: 'CR-9001', client: 'Automotora XYZ', amount: 45000, reason: 'Documentación Incompleta', date: '2026-01-15' },
    { creditId: 'CR-9002', client: 'Luis Torres', amount: 8000, reason: 'Score Crediticio Bajo', date: '2026-02-10' },
    { creditId: 'CR-9003', client: 'Servicios Alfa', amount: 125000, reason: 'Mora mayor a 360 días', date: '2026-02-12' },
    { creditId: 'CR-9004', client: 'Diana M', amount: 3200, reason: 'Fraude Sospechoso', date: '2026-02-18' }
  ];

  tableColumns = [
    { field: 'creditId', header: 'ID de Crédito' },
    { field: 'client', header: 'Cliente' },
    { field: 'amount', header: 'Monto ($)' },
    { field: 'reason', header: 'Motivo de Descarte' },
    { field: 'date', header: 'Fecha Evaluación' }
  ];

  onRowSelect(event: any) {
    if (!this.selectedCredits.includes(event.data)) {
      this.selectedCredits.push(event.data);
    }
  }

  onRowUnselect(event: any) {
    this.selectedCredits = this.selectedCredits.filter(c => c.creditId !== event.data.creditId);
  }

  discardMassively() {
    if (this.selectedCredits.length === 0) return;

    alert(`Se han descartado permanentemente ${this.selectedCredits.length} créditos.`);
    this.tableData = this.tableData.filter(item => !this.selectedCredits.includes(item));
    this.selectedCredits = [];
  }
}
