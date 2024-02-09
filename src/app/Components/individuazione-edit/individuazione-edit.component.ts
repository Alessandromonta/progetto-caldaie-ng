import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cloneDeep } from 'lodash';
import { finalize, tap } from 'rxjs';
import { SoluzioneIndividuazioneGuasto } from 'src/app/Models/SoluzioneIndividuazione';
import { IndividuazioniService } from 'src/app/Services/individuazioni.service';

@Component({
  selector: 'app-individuazione-edit',
  templateUrl: './individuazione-edit.component.html',
  styleUrl: './individuazione-edit.component.less'
})
export class IndividuazioneEditComponent {
  constructor(
    private individuazioniService: IndividuazioniService
  ) {}

  @Input() selectedItem: SoluzioneIndividuazioneGuasto;
  @Output() saveOrUpdateEvent: EventEmitter<SoluzioneIndividuazioneGuasto> = new EventEmitter<SoluzioneIndividuazioneGuasto>();
  public saving: boolean;

  public saveOrUpdateData() {
    this.saving = true;
    const saveOrUpdate = this.selectedItem.id ?
      this.individuazioniService.updateItem(this.selectedItem.id, this.selectedItem) :
      this.individuazioniService.addItem(this.selectedItem);

    saveOrUpdate
      .pipe(
        tap(response => console.log(response)),
        tap(response =>
            this.selectedItem = cloneDeep(response)
        ),
        tap(() => this.saveOrUpdateEvent.emit(this.selectedItem)),
        finalize(() => this.saving = false)
      )
      .subscribe();
  }
}
