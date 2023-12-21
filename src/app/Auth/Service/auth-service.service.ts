import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  HttpClient, HttpHeaders,
} from '@angular/common/http';
import { remove } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://autoclima-001-site1.atempurl.com/api'; 

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
    const credentials = { username, password };

    return this.http.post(`${this.apiUrl}/User/Login`, credentials, { responseType: 'text' }).pipe(
      tap((response) => {
        console.log('Risultato della chiamata POST Login:', response);
      })
    );
  }
  
  logout(): Observable<any> {
    const token = localStorage.getItem('bearerToken');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
    };
    
    return this.http.post(`${this.apiUrl}/User/Logout`, null, httpOptions);
  }

  getUserRole() {
    const token = localStorage.getItem('bearerToken'); 

    if(token == null){
      console.log("Token non valido, logout effettuato?");
      
    }
    else{
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken['Grado']; // Estrai il claim "Grado"
    }
  }
  
}