import { Component, Input, Output, EventEmitter, TemplateRef, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: { field: string, header: string }[] = [];
  @Input() rows: number = 10;
  @Input() paginator: boolean = true;
  @Input() selectionMode?: 'single' | 'multiple';

  @Output() onRowSelect = new EventEmitter<any>();
  @Output() onRowUnselect = new EventEmitter<any>();

  handleRowSelect(event: any) {
    this.onRowSelect.emit(event);
  }

  handleRowUnselect(event: any) {
    this.onRowUnselect.emit(event);
  }
}
