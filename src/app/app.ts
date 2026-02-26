import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TopbarComponent } from './layout/topbar/topbar';
import { SidebarComponent } from './layout/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TopbarComponent, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  sidebarVisible: boolean = false;
  title = 'VentaCartera';
}
