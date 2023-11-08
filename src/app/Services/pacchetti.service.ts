import { Injectable } from '@angular/core';
import { Pacchetti } from '../Models/Pacchetti';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from '../shared/base.crud.service';

@Injectable({
  providedIn: 'root'
})
export class PacchettiService extends BaseCrudService<Pacchetti>{

  constructor(private http: HttpClient) { 
    super('Pacchetti', http);
  }
}
