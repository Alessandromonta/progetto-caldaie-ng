import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCrudService } from '../shared/services/base.crud.service';
import { Caldaie } from '../Models/Caldaie';
import { ErroriCaldaie } from '../Models/ErroriCaldaie';

@Injectable({
  providedIn: 'root'
})
export class CaldaieService extends BaseCrudService<Caldaie> {

  constructor(private http: HttpClient) {
    super('Caldaie', http);
  }
}
