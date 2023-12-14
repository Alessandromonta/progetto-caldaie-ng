import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  HttpClient, HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://autoclima-001-site1.atempurl.com/api'; 

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router) {}

  signup(username: string, email: string, password: string, confirmPassword: string, grado:number, token:number): Observable<any> {
    const credentials = { username, password, email, grado, token };

    return this.http.post(`${this.apiUrl}/User`, credentials, { responseType: 'text' }).pipe(
      tap((response) => {
        console.log('Risultato della chiamata POST Signup:', response);
      })
    );
  }

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };

    return this.http.post(`${this.apiUrl}/User/Login`, credentials, { responseType: 'text' }).pipe(
      tap((response) => {
        console.log('Risultato della chiamata POST Login:', response);
      })
    );
  }
  
  logout(): Observable<any> {
    const token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
    };


    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }

    return this.http.post(`${this.apiUrl}/Logout`, null, httpOptions);
  }

  getUserRole() {
    const token = localStorage.getItem('bearerToken'); 
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken['Grado']; // Estrai il claim "Grado"
  }

}