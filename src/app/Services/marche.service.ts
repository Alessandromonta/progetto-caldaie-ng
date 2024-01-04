import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from '../shared/services/base.crud.service';
import { MarcaCaldaie } from '../Models/MarcaCaldaie';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Caldaie } from '../Models/Caldaie';

@Injectable({
  providedIn: 'root',
})
export class MarcheService extends BaseCrudService<MarcaCaldaie> {

  public marcaId$: ReplaySubject<MarcaCaldaie> = new ReplaySubject<MarcaCaldaie>();

  constructor(private http: HttpClient) { 
    super('MarcaCaldaie', http);
  }

  public getCaldaieMarca(idMarca: number): Observable<Caldaie[]> {
    return this.http.get<Caldaie[]>(`${this.apiUrl}/GetCaldaieFromMarca/${idMarca}`);
  }
}
