import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from '../shared/services/base.crud.service';
import { MarcaCaldaie } from '../Models/MarcaCaldaie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MarcheService extends BaseCrudService<MarcaCaldaie> {

  constructor(private http: HttpClient) { 
    super('MarcaCaldaie', http);
  }
}
