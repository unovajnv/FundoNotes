import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})

export class HomeComponent{
  constructor(private httpService: HttpService, private router: Router, private titleService: Title) { }
  dataArray: any[] = [];

  ngOnInit(): void {
    localStorage.setItem('access_token', 'wPdnlw7aSP9MkmmIn1ARRLt3YiFaqW0AhbujF2HQywT0QKyCVQvYYCo3MJLtB5iJ')
  }
  isSidebarOpen = false;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
