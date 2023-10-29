import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  HttpClient,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://autoclima-001-site1.atempurl.com/api'; 

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };

    return this.http.post(`${this.apiUrl}/User/Login`, credentials, { responseType: 'text' }).pipe(
      tap((response) => {
        console.log('Risultato della chiamata POST:', response);
      })
    );

  }

  getUserRole() {
    const token = localStorage.getItem('bearerToken'); 
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken['Grado']; // Estrai il claim "Grado"
  }

  

}