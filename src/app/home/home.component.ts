import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})

export class HomeComponent{
  constructor() { }
  dataArray: any[] = [];

  ngOnInit(): void {
    // localStorage.setItem('access_token', 'wPdnlw7aSP9MkmmIn1ARRLt3YiFaqW0AhbujF2HQywT0QKyCVQvYYCo3MJLtB5iJ')
  }
  isSidebarOpen = false;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
