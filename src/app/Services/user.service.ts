import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { 
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
  }

  getUserData(): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", this.getUserId() ?? -1);
    return this.http.get<any>("api/auth/user", { params: queryParams })
  }

  register(data: {
    email: string,
    username: string,
    password: string
  }): Observable<any> {
    console.log("register", data)
    
    return this.http
    .post<any>('api/auth/register', data)
  }

  login(data: {
    email: string,
    password: String
  }): Observable<any> {
    return this.http.post<any>('api/auth/login', data)
  }

  updateUser(data: {
    id: number,
    email: string,
    username: string
  }): Observable<any> {
    return this.http.put<any>('api/auth/update-user', data)
  }

  resetPassword(data: { id: number, password: string }): Observable<any> {
    return this.http.put<any>('api/auth/reset-password', { id: data.id, pass: data.password })
  }

  setUser(data: {
    id: number,
    username: string,
    email: string,
    token: string
  }) {
    localStorage.setItem("userId", data.id.toString())
    localStorage.setItem("username", data.username)
    localStorage.setItem("email", data.email)
    localStorage.setItem("token", data.token)
  }


  getUserId() {
    return localStorage.getItem("userId")
  }

  getUserToken() {
    return localStorage.getItem("token")
  }

  getUsername() {
    return localStorage.getItem("username")
  }

}