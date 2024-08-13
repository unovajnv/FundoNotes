import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  displayOption(e:Event) :void{
    e.preventDefault();
    console.log(' display option ');
    //@ts-ignore
    document.getElementById('popUp').style.display = 'block';
  }
  ngOnInit(): void {}

  optionDiv() {}
  
}
