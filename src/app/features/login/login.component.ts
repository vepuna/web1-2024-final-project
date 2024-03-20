import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {error} from "@angular/compiler-cli/src/transformers/util";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NgClass],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginObj: Login;
  protected errorOccurred = false;

  constructor(private http: HttpClient,private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    console.log(this.loginObj);
    this.http.post('http://localhost:5000/auth/login', this.loginObj)
      .pipe(
      catchError(error =>{
        this.errorOccurred = true;
        return throwError(error);
      }))
      .subscribe((res:any)=>{
      if(res.token) {
        localStorage.setItem('JWToken', res.token)
        this.router.navigateByUrl('/dashboard')
      } else {
        console.log(res.message);
      }
    })
  }
}

export class Login {
  email: string;
  password: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
}
