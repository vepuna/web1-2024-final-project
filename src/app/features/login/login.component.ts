import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginObj: Login;

  constructor(private http: HttpClient,private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    debugger;
    console.log(this.loginObj);
    this.http.post('http://localhost:5000/auth/login', this.loginObj).subscribe((res:any)=>{
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
