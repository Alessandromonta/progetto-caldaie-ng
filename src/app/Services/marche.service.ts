import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseCrudService } from '../shared/assets/services/base.crud.service';
import { Caldaie } from '../Models/Caldaie';
import { MarcaCaldaie } from '../Models/MarcaCaldaie';

@Injectable({
  providedIn: 'root',
})
export class MarcheService extends BaseCrudService<MarcaCaldaie> {

  constructor(private http: HttpClient) { 
    super('MarcaCaldaie', http);
  }
}
