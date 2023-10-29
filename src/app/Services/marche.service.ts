import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarcheService {
  private apiUrl = 'http://autoclima-001-site1.atempurl.com/api'; 

  constructor(private http: HttpClient) {}

  getMarche(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/MarcaCaldaie`);
  }

  addMarca(marca: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/MarcaCaldaie`, marca);
  }

  deleteMarca(marcaId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/MarcaCaldaie/${marcaId}`);
  }

  updateMarca(marcaId: number, updatedMarca: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/MarcaCaldaie/${marcaId}`, updatedMarca);
  }
}
