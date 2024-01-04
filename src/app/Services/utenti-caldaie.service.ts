import { Injectable } from '@angular/core';
import { BaseCrudService } from '../shared/services/base.crud.service';
import { HttpClient } from '@angular/common/http';
import { UtentiCaldaie } from '../Models/UtentiCaldaie';

@Injectable({
  providedIn: 'root'
})
export class UtentiCaldaieService extends BaseCrudService<UtentiCaldaie>{

  constructor(private http: HttpClient) { 
    super('UtentiCaldaie', http);
  }
}
