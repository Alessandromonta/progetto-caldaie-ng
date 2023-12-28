import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {EMPTY, Observable, finalize, forkJoin, switchMap, tap} from 'rxjs';
import { cloneDeep } from 'lodash';
import { CaldaieService } from 'src/app/Services/caldaie.service';
import { Caldaie } from 'src/app/Models/Caldaie';
import { ErroriService } from 'src/app/Services/errori.service';
import { ErroriCaldaie } from 'src/app/Models/ErroriCaldaie';

@Component({
  selector: 'app-caldaia-edit',
  templateUrl: './caldaia-edit.component.html',
  styleUrls: ['./caldaia-edit.component.less']
})
export class CaldaiaEditComponent implements OnInit {

  constructor(
    private caldaieService: CaldaieService,
    private erroriService: ErroriService
  ) {}

  @Input() selectedCaldaia: Caldaie;
  @Output() saveOrUpdateEvent: EventEmitter<Caldaie> = new EventEmitter<Caldaie>();
  public erroriSelectedCaldaia: ErroriCaldaie[] = [];
  public newErroriSelectedCaldaia: ErroriCaldaie[] = [];
  public saving: boolean;

  ngOnInit() {
    this.selectedCaldaia.idMarca = 1;
    if(this.selectedCaldaia.id)
      this.erroriService.getErroriCaldaia(this.selectedCaldaia.id)
        .pipe(
          tap(erroriCaldaie => console.log(erroriCaldaie)),
          tap(erroriCaldaia => this.erroriSelectedCaldaia = erroriCaldaia)
        )
        .subscribe()
  }

  public saveOrUpdateData() {
    this.saving = true;
    const saveOrUpdate = this.selectedCaldaia.id ?
      this.caldaieService.updateItem(this.selectedCaldaia.id, this.selectedCaldaia) :
      this.caldaieService.addItem(this.selectedCaldaia);

    saveOrUpdate
      .pipe(
        tap(response => console.log(response)),
        tap(response => {
            this.selectedCaldaia = cloneDeep(response);
            this.erroriSelectedCaldaia.forEach(errore => {
              errore.idCaldaia = response.id
            });
            this.newErroriSelectedCaldaia.forEach(newErrore => {
              newErrore.idCaldaia = response.id
            });
        }),
        switchMap(response => {
          let saveOrUpdateErrorCalls: Observable<ErroriCaldaie>[] = [];
          this.newErroriSelectedCaldaia.forEach(newErrore => {
            saveOrUpdateErrorCalls.push(this.erroriService.addItem(newErrore))
          });
          this.erroriSelectedCaldaia.forEach(errore => {
            saveOrUpdateErrorCalls.push(this.erroriService.updateItem(errore.id, errore))
          });
          return forkJoin(saveOrUpdateErrorCalls);
        }),
        tap(() => this.saveOrUpdateEvent.emit(this.selectedCaldaia)),
        finalize(() => this.saving = false)
      )
      .subscribe();
  }

  public addError() {
    const newErrore = new ErroriCaldaie();
    newErrore.idCaldaia = this.selectedCaldaia.id;
    this.newErroriSelectedCaldaia.push(newErrore);
  }

  public deleteError(errorIdx: number) {
    this.erroriService
      .deleteItem(this.erroriSelectedCaldaia[errorIdx].id)
      .pipe(
        tap(() => this.erroriSelectedCaldaia.splice(errorIdx, 1))
      )
      .subscribe();
  }
}
