import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from '../shared/services/base.crud.service';
import { Injectable } from '@angular/core';
import { AccortezzaSostituzione } from '../Models/AccortezzaSostituzione';

@Injectable({
  providedIn: 'root',
})
export class AccortezzeService extends BaseCrudService<AccortezzaSostituzione> {

  constructor(private http: HttpClient) {
    super('AccortezzaSostituzione', http);
  }
}
