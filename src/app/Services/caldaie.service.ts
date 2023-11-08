import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCrudService } from '../shared/base.crud.service';
import { Caldaie } from '../Models/Caldaie';

@Injectable({
  providedIn: 'root'
})
export class CaldaieService extends BaseCrudService<Caldaie> {

  constructor(private http: HttpClient) { 
    super('Caldaie', http);
  }
}
