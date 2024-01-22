import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  HttpClient, HttpHeaders,
} from '@angular/common/http';
import { remove } from 'lodash';
import { Utenti } from 'src/app/Models/utenti';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://autoclima-001-site2.atempurl.com/api';
  public utenteLoggato: Utenti;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  signup(username: string, email: string, password: string, confirmPassword: string, grado:number = 0, token:number = 0): Observable<any> {
    const credentials = { username, password, email, grado, token };

    console.log(credentials);

    return this.http.post(`${this.apiUrl}/User`, credentials, { responseType: 'text' }).pipe(
      tap((response) => {
        console.log('Risultato della chiamata POST Signup:', response);
      })
    );
  }

  login(username: string, password: string): Observable<any> {
    let email: string = null

    if(username.includes("@")){
      email = username;
      username = null
    }
    const credentials = { username, email, password };

    return this.http.post(`${this.apiUrl}/User/Login`, credentials, { responseType: 'text' }).pipe(
      tap((response) => {
        console.log('Risultato della chiamata POST Login:', response);
      })
    );
  }

  logout(): Observable<any> {
    const token = this.getToken()

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
    };

    this.removeToken()
    return this.http.post(`${this.apiUrl}/User/Logout`, null, httpOptions);
  }

  public getUserRole() {
    const token = this.getToken()
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken['Grado']; // Estrai il claim "Grado"
  }

  public getUserId() {
    const token = this.getToken()
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken['UserId']; // Estrai il claim "UserId"
  }

  public getToken(): string {
    return localStorage.getItem('bearerToken');
  }

  public removeToken():void{
    localStorage.removeItem('bearerToken');
  }
}
