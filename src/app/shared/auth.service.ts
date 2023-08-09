import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserData } from '../Models/userdata';
import { Register } from './modelsDTO/Register';
import { Login } from './modelsDTO/Login';
import { Utenti } from '../Models/utenti';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'https://localhost:7173/api/User';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}

  //public userData: UserData = null;
  //Init
  initUserData(): void{
    //this.userData = new UserData();
  }

  // Sign-up
  RegisterUser(user: Utenti): Observable<any> {
    let api = `${this.endpoint}`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }
  // Sign-in
  loginUser(user: Utenti): Observable<any> {
    return this.http.post(`${this.endpoint}/Login`, user, { responseType: 'text' });   //default piglia response type: JSON
  }
  setTokenHeader(): void{
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });
  }
  getToken() : string {
    if(localStorage.getItem('access_token') != null)
      return localStorage.getItem('access_token') as string;
    else
      return ""
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }
  // User profile
  getUserProfile(): Observable<any> {
    debugger
    let api = `${this.endpoint}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        console.log(res);
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}