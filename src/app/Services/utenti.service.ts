import { Utenti } from './../Models/utenti';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCrudService } from '../shared/services/base.crud.service';

@Injectable({
  providedIn: 'root'
})
export class UtentiService extends BaseCrudService<Utenti> {

  constructor(private http: HttpClient) {
    super('User', http);
  }
}
