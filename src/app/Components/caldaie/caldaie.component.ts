import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { MarcaCaldaie } from 'src/app/Models/MarcaCaldaie';
import { CaldaieService } from 'src/app/Services/caldaie.service';
import {cloneDeep} from 'lodash';
import { Caldaie } from 'src/app/Models/Caldaie';

@Component({
  selector: 'app-caldaie',
  templateUrl: './caldaie.component.html',
  styleUrls: ['./caldaie.component.less']
})
export class CaldaieComponent implements OnInit {

  constructor(private caldaieService: CaldaieService, private httpClient: HttpClient) {}

  public caldaieList: Caldaie[] = [];
  public selectedCaldaia: Caldaie;
  public selectedId: number;

  public viewSidebarVisibile: boolean = false;
  public editSidebarVisibile: boolean = false;
  public deleteDialogVisible: boolean = false;
  public loading: boolean = true;

  ngOnInit(): void {
    this.loading = true; // Imposta il caricamento su true prima di iniziare il caricamento dei dati
    this.getCaldaieList(); // Chiamata per caricare i dati
  }
//#region   CRUD
  public getCaldaieList(): void {
    this.caldaieService.getItems()
      .pipe(
        tap(caldaie => {
          this.caldaieList = caldaie;
          this.loading = false
        }),
      )
      .subscribe();
  }

  public viewData(rowIndex: number) {
    this.viewSidebarVisibile = !this.viewSidebarVisibile;
    this.selectedCaldaia = this.caldaieList[rowIndex];
  }

  public editData(rowIndex?: number) {
    if(rowIndex != null) {
      this.selectedCaldaia = cloneDeep(this.caldaieList[rowIndex]);
      console.log(this.selectedCaldaia)
      this.selectedId = rowIndex;
    }
    else
      this.selectedCaldaia = new Caldaie();
      this.editSidebarVisibile = !this.editSidebarVisibile;
  }

  public patchDataAfterSaveOrUpdate(editedMarca: Caldaie) {
    const savedOrUpdatedMarca: Caldaie = cloneDeep(editedMarca);
    if(this.selectedId)
      this.caldaieList[this.selectedId] = savedOrUpdatedMarca;
    else
      this.caldaieList.push(savedOrUpdatedMarca);
    delete this.selectedId;
    this.editSidebarVisibile = false;
  }

  public deleteData() {
    this.caldaieService.deleteItem(this.selectedCaldaia.id)
      .pipe(
        tap(response => console.log(response)),
        tap(() => this.caldaieList.splice(this.selectedId, 1)),
        tap(() => console.log(this.selectedCaldaia)),
        tap(() => this.deleteDialogVisible = false)
      )
      .subscribe();
  }
}

