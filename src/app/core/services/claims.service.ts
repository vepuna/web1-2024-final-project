import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IClaims} from "../models/claims.model";
import {Observable, retry, switchMap, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  constructor(private http: HttpClient){}

  claims: IClaims[] = []

  createClaim({formData}: { formData: any }): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<IClaims[]>(`http://localhost:5000/user-claims`, formData, { headers })
      .pipe(
        retry(2),
        tap(claims => this.claims = claims)
      )
  }
  getClaims(token: string): Observable<IClaims[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<IClaims[]>(`http://localhost:5000/user-claims`, { headers })
      .pipe(
        retry(2),
        tap(claims => this.claims = claims),
      )
  }

  deleteClaim(claimId: number, token: string): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://localhost:5000/user-claims/${claimId}`, { headers }).pipe(
      retry(2),
      switchMap(() => this.getClaims(token))
    )
  }

}
