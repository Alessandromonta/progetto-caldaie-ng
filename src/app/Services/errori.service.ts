import { Injectable } from '@angular/core';
import { BaseCrudService } from '../shared/services/base.crud.service';
import { ErroriCaldaie } from '../Models/ErroriCaldaie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErroriService extends BaseCrudService<ErroriCaldaie> {

  constructor(private http: HttpClient) {
    super('ErroriCaldaie', http);
  }

  public getErroriCaldaia(caldaiaId: number): Observable<ErroriCaldaie[]> {
    return this.http.get<ErroriCaldaie[]>(`${this.apiUrl}/GetErroriCaldaia/${caldaiaId}`);
  }
}
