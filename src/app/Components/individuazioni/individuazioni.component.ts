import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import {cloneDeep} from 'lodash';
import { IndividuazioniService } from 'src/app/Services/individuazioni.service';
import { SoluzioneIndividuazioneGuasto } from 'src/app/Models/SoluzioneIndividuazione';

@Component({
  selector: 'app-individuazioni',
  templateUrl: './individuazioni.component.html',
  styleUrls: ['./individuazioni.component.less']
})
export class IndividuazioniComponent implements OnInit {

  constructor(private individuazioniService: IndividuazioniService, private httpClient: HttpClient) {}

  public itemList: SoluzioneIndividuazioneGuasto[] = [];
  public selectedItem: SoluzioneIndividuazioneGuasto;
  public selectedId: number;

  public viewSidebarVisibile: boolean = false;
  public editSidebarVisibile: boolean = false;
  public deleteDialogVisible: boolean = false;
  public loading: boolean = true;

  ngOnInit(): void {
    this.loading = true; // Imposta il caricamento su true prima di iniziare il caricamento dei dati
    this.getList(); // Chiamata per caricare i dati
  }
//#region   CRUD
  getList(): void {
    this.individuazioniService.getItems().subscribe((itemList) => {
      this.itemList = itemList;
      setTimeout(() => {
        // Dopo aver caricato i dati o completato il processo
        this.loading = false;
      }, 0);
    });
  }
  public viewData(rowIndex: number) {
    this.viewSidebarVisibile = !this.viewSidebarVisibile;
    this.selectedItem = this.itemList[rowIndex];
  }

  public editData(rowIndex?: number) {
    if(rowIndex != null) {
      this.selectedItem = cloneDeep(this.itemList[rowIndex]);
      this.selectedId = rowIndex;
      console.log(rowIndex)
    }
    else
      this.selectedItem = new SoluzioneIndividuazioneGuasto();
      this.editSidebarVisibile = !this.editSidebarVisibile;
  }

  public patchDataAfterSaveOrUpdate(editedItem: SoluzioneIndividuazioneGuasto) {
    const saveOrUpdateItem: SoluzioneIndividuazioneGuasto = cloneDeep(editedItem);
    if(this.selectedId)
      this.itemList[this.selectedId] = saveOrUpdateItem;
    else
      this.itemList.push(saveOrUpdateItem);
    delete this.selectedId;
    this.editSidebarVisibile = false;
  }

  public deleteData() {
    this.individuazioniService.deleteItem(this.selectedItem.id)
      .pipe(
        tap(() => {
          this.itemList.splice(this.selectedId, 1);
          this.deleteDialogVisible = false;
        })
      )
      .subscribe();
  }
}

