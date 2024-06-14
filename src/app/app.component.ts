import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'produtos';
  isSidebarOpened = true;


  toggleSidebar() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }
}