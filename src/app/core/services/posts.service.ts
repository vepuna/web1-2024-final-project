import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {delay, Observable, retry, tap, throwError} from "rxjs";
import {IPosts} from "../models/posts.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,

  ) { }

  posts: IPosts[] = [];

  getAll(): Observable<IPosts[]>{
    return this.http.get<IPosts[]>('http://localhost:5000/posts')
    .pipe(
      retry(2),
      tap(posts => this.posts = posts)
    )
  }

  uploadPost(formData: FormData, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://localhost:5000/posts`, formData, { headers });
  }

}
