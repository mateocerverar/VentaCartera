import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from '../../../forms/file-upload/file-upload';
import { TableComponent } from '../../../data/table/table';
import { ButtonComponent } from '../../../core/button/button';
import { CardComponent } from '../../../data/card/card';

@Component({
  selector: 'app-credit-upload',
  standalone: true,
  imports: [CommonModule, FileUploadComponent, TableComponent, ButtonComponent, CardComponent],
  templateUrl: './credit-upload.html',
  styleUrl: './credit-upload.scss'
})
export class CreditUploadComponent {
  uploadedData: any[] = [];
  tableColumns = [
    { field: 'creditId', header: 'ID de Crédito' },
    { field: 'client', header: 'Cliente' },
    { field: 'amount', header: 'Monto ($)' },
    { field: 'daysPastDue', header: 'Días Mora' },
    { field: 'status', header: 'Estado' }
  ];

  isUploaded: boolean = false;

  onFileSelect(event: any) {
    // Mock parsing file logic to generate preview data
    this.uploadedData = [
      { creditId: 'CR-1001', client: 'Juan Perez', amount: 5000, daysPastDue: 90, status: 'Válido' },
      { creditId: 'CR-1002', client: 'Maria Gomez', amount: 15000, daysPastDue: 120, status: 'Válido' },
      { creditId: 'CR-1003', client: 'Empresa SA', amount: 85000, daysPastDue: 60, status: 'Válido' },
      { creditId: 'CR-1004', client: 'Felipe L', amount: 3500, daysPastDue: 180, status: 'Incompleto' },
      { creditId: 'CR-1005', client: 'Marta Diaz', amount: 9200, daysPastDue: 30, status: 'Válido' }
    ];
    this.isUploaded = false; // reset state
  }

  confirmUpload() {
    // Mock uploading data to server
    this.isUploaded = true;
    setTimeout(() => {
      alert('Cartera cargada exitosamente al sistema.');
      this.uploadedData = [];
      this.isUploaded = false;
    }, 1000);
  }
}
