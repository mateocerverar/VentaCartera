import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, FileUploadModule],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.scss'
})
export class FileUploadComponent {
  @Input() mode: 'basic' | 'advanced' = 'advanced';
  @Input() chooseLabel: string = 'Choose';
  @Input() uploadLabel: string = 'Upload';
  @Input() cancelLabel: string = 'Cancel';
  @Input() accept: string = 'image/*';
  @Input() maxFileSize: number = 1000000;
  @Input() multiple: boolean = false;
  @Input() auto: boolean = false;
  @Input() fileLimit: number | undefined;

  @Output() onUpload = new EventEmitter<any>();
  @Output() onSelect = new EventEmitter<any>();

  handleUpload(event: any) {
    this.onUpload.emit(event);
  }

  handleSelect(event: any) {
    this.onSelect.emit(event);
  }
}
