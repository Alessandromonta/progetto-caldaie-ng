import { Injectable } from '@angular/core';
import { BaseCrudService } from '../shared/services/base.crud.service';
import { ErroriCaldaie } from '../Models/ErroriCaldaie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoluzioniErrori } from '../Models/SoluzioniErrori';

@Injectable({
  providedIn: 'root'
})
export class SoluzioniService extends BaseCrudService<SoluzioniErrori> {

  constructor(private http: HttpClient) {
    super('SoluzioniErrori', http);
  }

  public getSoluzioniErrore(erroreId: number): Observable<SoluzioniErrori[]> {
    return this.http.get<SoluzioniErrori[]>(`${this.apiUrl}/GetSoluzioniErrore/${erroreId}`);
  }
}
