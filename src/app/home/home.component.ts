import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})

export class HomeComponent{
  inputValue: string = '';
  constructor(private router:Router,private sharedService:SharedService) { 
    this.sharedService.currentData.subscribe(data => this.inputValue = data);
  }
  onInputChange() {
    this.sharedService.changeData(this.inputValue);
  }
  dataArray: any[] = [];

  ngOnInit(): void {
    // localStorage.setItem('access_token', 'wPdnlw7aSP9MkmmIn1ARRLt3YiFaqW0AhbujF2HQywT0QKyCVQvYYCo3MJLtB5iJ')
  }
  isSidebarOpen = false;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logOut(){
    localStorage.removeItem('access_token');
    this.router.navigate(['/']);
  }
}
