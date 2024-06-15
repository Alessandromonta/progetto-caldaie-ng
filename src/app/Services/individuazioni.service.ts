import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from '../shared/services/base.crud.service';
import { Injectable } from '@angular/core';
import { SoluzioneIndividuazioneGuasto } from '../Models/SoluzioneIndividuazione';

@Injectable({
  providedIn: 'root',
})
export class IndividuazioniService extends BaseCrudService<SoluzioneIndividuazioneGuasto> {

  constructor(private http: HttpClient) {
    super('SoluzioneIndividuazioneGuasto', http);
  }
}
