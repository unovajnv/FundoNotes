import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormGroup} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent {
  password: string='';
  email: string='';
 loginForm: FormGroup;
  constructor(private formbuilder:FormBuilder, private httpService:HttpService, private router:Router) {
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
   }
  

  onSubmit(){
    
    this.httpService.postAPIcall('/user/login',this.loginForm.value).subscribe({
      next: (res: any) => {
        console.log('result is: ', res);
        localStorage.setItem("access_Token", res.id);
        this.router.navigate(['/home/notes']);
      },
      error: (e) => {
        
        console.log('Error occurred: ', e);
      },
    });
  }




  displayOption(e:Event) :void{
    e.preventDefault();
    //@ts-ignore
    document.getElementById('popUp').style.display = 'block';
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  // matcher = new MyErrorStateMatcher();
  
  // -------------------

}
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }


