import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MarcaCaldaie } from 'src/app/Models/MarcaCaldaie';
import { MarcheService } from 'src/app/Services/marche.service';
import {finalize, tap} from 'rxjs';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-marca-edit',
  templateUrl: './marca-edit.component.html',
  styleUrls: ['./marca-edit.component.less']
})
export class MarcaEditComponent {

  constructor(
    private marcheService: MarcheService
  ) {}

  @Input() selectedMarca: MarcaCaldaie;
  @Output() saveOrUpdateEvent: EventEmitter<MarcaCaldaie> = new EventEmitter<MarcaCaldaie>();
  public saving: boolean;

  public saveOrUpdateData() {
    this.saving = true;
    const saveOrUpdate = this.selectedMarca.id ? 
      this.marcheService.updateItem(this.selectedMarca.id, this.selectedMarca) :
      this.marcheService.addItem(this.selectedMarca);
    
    saveOrUpdate
      .pipe(
        tap(response => console.log(response)),
        tap(response => 
            this.selectedMarca = cloneDeep(response)
        ),
        tap(() => this.saveOrUpdateEvent.emit(this.selectedMarca)),
        finalize(() => this.saving = false)
      )
      .subscribe();
  }
}
