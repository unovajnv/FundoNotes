import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent {
  constructor() {}
  displayOption(e:Event) :void{
    e.preventDefault();
    //@ts-ignore
    document.getElementById('popUp').style.display = 'block';
  }
}


