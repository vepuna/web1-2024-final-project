import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IGlobal} from "../models/global.model";
import {Observable, retry, switchMap, tap} from "rxjs";
import {IPosts} from "../models/posts.model";
import {IClaims} from "../models/claims.model";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  global: IGlobal = <IGlobal>{};

  getGlobal(): Observable<IGlobal>{
    return this.http.get<IGlobal>('http://localhost:5000/global')
      .pipe(
        retry(2),
        tap(global => this.global = global)
      )
  }


  updateGlobal({formData}: { formData: any }, token: string): Observable<IGlobal> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<IGlobal>(`http://localhost:5000/global`, formData, { headers })
      .pipe(
        retry(2),
        tap(claims => this.global = claims)
      )
  }


}
