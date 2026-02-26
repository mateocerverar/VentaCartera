import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, DrawerModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class SidebarComponent {
  @Input() visible: boolean = false;
  @Input() header: string = 'Menu';
  @Input() position: 'left' | 'right' | 'top' | 'bottom' | 'full' = 'left';

  @Output() visibleChange = new EventEmitter<boolean>();

  onHide() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
