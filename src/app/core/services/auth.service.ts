import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(): string {
    const token = localStorage.getItem('JWToken');
    return token !== null ? token : '';
  }
}
