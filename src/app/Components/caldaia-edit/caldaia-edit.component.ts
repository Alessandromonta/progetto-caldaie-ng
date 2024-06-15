import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {EMPTY, Observable, finalize, forkJoin, switchMap, tap} from 'rxjs';
import { cloneDeep } from 'lodash';
import { CaldaieService } from 'src/app/Services/caldaie.service';
import { Caldaie } from 'src/app/Models/Caldaie';
import { ErroriService } from 'src/app/Services/errori.service';
import { ErroriCaldaie } from 'src/app/Models/ErroriCaldaie';
import { MarcheService } from 'src/app/Services/marche.service';
import { MarcaCaldaie } from 'src/app/Models/MarcaCaldaie';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-caldaia-edit',
  templateUrl: './caldaia-edit.component.html',
  styleUrls: ['./caldaia-edit.component.less']
})
export class CaldaiaEditComponent implements OnInit {

  constructor(
    private caldaieService: CaldaieService,
    private marcheService: MarcheService,
    private erroriService: ErroriService
  ) {}

  @Input() selectedCaldaia: Caldaie;
  @Output() saveOrUpdateEvent: EventEmitter<Caldaie> = new EventEmitter<Caldaie>();
  public erroriSelectedCaldaia: ErroriCaldaie[] = [];
  public newErroriSelectedCaldaia: ErroriCaldaie[] = [];
  public selectedErroreIdx: number;
  public editErroreFlag: boolean;
  public viewErroreFlag: boolean;
  public saving: boolean;
  public marcheListForDropdown: SelectItem[];
  public loadingMarche: boolean;
  public viewImageModal: boolean;

  ngOnInit() {
    this.marcheService.getItems()
      .pipe(
        tap(marcheList => {
          this.marcheListForDropdown = marcheList.map(marca => {
            return {
              label: marca.nome,
              value: marca.id
            }
          })
        }),
        switchMap(() => {
          if(this.selectedCaldaia.id)
            return this.erroriService.getErroriCaldaia(this.selectedCaldaia.id)
              .pipe(
                tap(erroriCaldaie => console.log(erroriCaldaie)),
                tap(erroriCaldaia => this.erroriSelectedCaldaia = erroriCaldaia)
              )
            else
                return EMPTY;
        })
      )
      .subscribe();
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

  public editErrore(selectedErroreIdx?: number) {
    if(selectedErroreIdx != null) {
      this.selectedErroreIdx = selectedErroreIdx;
    } else {
      const newErrore = new ErroriCaldaie();
      newErrore.idCaldaia = this.selectedCaldaia.id;
      this.erroriSelectedCaldaia.push(newErrore);
      console.log(this.selectedCaldaia)
      this.selectedErroreIdx = this.erroriSelectedCaldaia.length - 1;
    }
    this.editErroreFlag = true;
  }

  public deleteError(errorIdx: number) {
    this.erroriService
      .deleteItem(this.erroriSelectedCaldaia[errorIdx].id)
      .pipe(
        tap(() => this.erroriSelectedCaldaia.splice(errorIdx, 1))
      )
      .subscribe();
  }

  public updateErrore(errore: ErroriCaldaie) {
    this.erroriSelectedCaldaia[this.selectedErroreIdx] = errore;
    this.editErroreFlag = false;
  }

  public uploadImage(event: any) {
    //console.log(event.files[0])
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      new Uint8Array()
      const base64String = (fileReader.result as string).split(',')[1];
      this.selectedCaldaia.immagine = base64String;
    }
    fileReader.readAsDataURL(event.files[0])
  }
}
