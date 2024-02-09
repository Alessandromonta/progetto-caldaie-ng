import { AccortezzaSostituzione } from './../../Models/AccortezzaSostituzione';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cloneDeep } from 'lodash';
import { finalize, tap } from 'rxjs';
import { AccortezzeService } from 'src/app/Services/accortezze.service';

@Component({
  selector: 'app-accortezza-edit',
  templateUrl: './accortezza-edit.component.html',
  styleUrl: './accortezza-edit.component.less'
})
export class AccortezzaEditComponent {

  constructor(private accortezzeService: AccortezzeService) {}

  @Input() selectedItem: AccortezzaSostituzione;
  @Output() saveOrUpdateEvent: EventEmitter<AccortezzaSostituzione> = new EventEmitter<AccortezzaSostituzione>();
  public saving: boolean;

  public saveOrUpdateData() {
    this.saving = true;
    const saveOrUpdate = this.selectedItem.id ?
      this.accortezzeService.updateItem(this.selectedItem.id, this.selectedItem) :
      this.accortezzeService.addItem(this.selectedItem);

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
