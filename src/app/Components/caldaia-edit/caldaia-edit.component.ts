import { Component, Input, Output, EventEmitter } from '@angular/core';
import {finalize, tap} from 'rxjs';
import { cloneDeep } from 'lodash';
import { CaldaieService } from 'src/app/Services/caldaie.service';
import { Caldaie } from 'src/app/Models/Caldaie';

@Component({
  selector: 'app-caldaia-edit',
  templateUrl: './caldaia-edit.component.html',
  styleUrls: ['./caldaia-edit.component.less']
})
export class CaldaiaEditComponent {

  constructor(
    private caldaieService: CaldaieService
  ) {}

  @Input() selectedCaldaia: Caldaie;
  @Output() saveOrUpdateEvent: EventEmitter<Caldaie> = new EventEmitter<Caldaie>();
  public saving: boolean;

  public saveOrUpdateData() {
    this.saving = true;
    const saveOrUpdate = this.selectedCaldaia.id ? 
      this.caldaieService.updateItem(this.selectedCaldaia.id, this.selectedCaldaia) :
      this.caldaieService.addItem(this.selectedCaldaia);
    
    saveOrUpdate
      .pipe(
        tap(response => console.log(response)),
        tap(response => 
            this.selectedCaldaia = cloneDeep(response)
        ),
        tap(() => this.saveOrUpdateEvent.emit(this.selectedCaldaia)),
        finalize(() => this.saving = false)
      )
      .subscribe();
  }
}
