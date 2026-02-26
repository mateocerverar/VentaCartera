import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonComponent } from '../../../core/button/button';
import { CardComponent } from '../../../data/card/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-purchase-selection',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonComponent, CardComponent, DialogModule, InputTextModule, FormsModule, SelectModule],
  templateUrl: './purchase-selection.html',
  styleUrl: './purchase-selection.scss'
})
export class PurchaseSelectionComponent {
  selectedCredits: any[] = [];
  viewDocsModalVisible: boolean = false;
  selectedCreditForDocs: any = null;

  portfolioData = [
    { creditId: 'CR-MK-001', amount: 50000, expectedReturn: 6000, termMonths: 12, rating: 'A' },
    { creditId: 'CR-MK-002', amount: 150000, expectedReturn: 22500, termMonths: 24, rating: 'B' },
    { creditId: 'CR-MK-003', amount: 25000, expectedReturn: 2250, termMonths: 6, rating: 'AA' },
    { creditId: 'CR-MK-004', amount: 75000, expectedReturn: 13500, termMonths: 18, rating: 'C' }
  ];

  get totalInvestment() {
    return this.selectedCredits.reduce((sum, item) => sum + item.amount, 0);
  }

  get totalExpectedReturn() {
    return this.selectedCredits.reduce((sum, item) => sum + item.expectedReturn, 0);
  }

  viewDocuments(credit: any) {
    this.selectedCreditForDocs = credit;
    this.viewDocsModalVisible = true;
  }

  purchase() {
    if (this.selectedCredits.length === 0) return;
    alert(`Compra de ${this.selectedCredits.length} créditos completada por un total de $${this.totalInvestment}.`);
    this.portfolioData = this.portfolioData.filter(item => !this.selectedCredits.includes(item));
    this.selectedCredits = [];
  }
}
