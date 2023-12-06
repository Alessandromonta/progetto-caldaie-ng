import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { MarcaCaldaie } from 'src/app/Models/MarcaCaldaie';
import { MarcheService } from 'src/app/Services/marche.service';
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-marche',
  templateUrl: './marche.component.html',
  styleUrls: ['./marche.component.less']
})
export class MarcheComponent implements OnInit {

  constructor(private marcheService: MarcheService, private httpClient: HttpClient) {}

  public marcheList: MarcaCaldaie[] = [];
  public selectedMarca: MarcaCaldaie;
  public selectedId: number;

  public viewSidebarVisibile: boolean = false;
  public editSidebarVisibile: boolean = false;
  public deleteDialogVisible: boolean = false;
  public loading: boolean = true;

  ngOnInit(): void {
    this.loading = true; // Imposta il caricamento su true prima di iniziare il caricamento dei dati
    this.getMarcheList(); // Chiamata per caricare i dati
  }
//#region   CRUD
  getMarcheList(): void {
    this.marcheService.getItems().subscribe((marche) => {
      this.marcheList = marche;
      setTimeout(() => {
        // Dopo aver caricato i dati o completato il processo
        this.loading = false;
      }, 0);
    });
  }
  public viewData(rowIndex: number) {
    this.viewSidebarVisibile = !this.viewSidebarVisibile;
    this.selectedMarca = this.marcheList[rowIndex];
  }

  public editData(rowIndex?: number) {
    if(rowIndex) {
      this.selectedMarca = cloneDeep(this.marcheList[rowIndex]);
      this.selectedId = rowIndex;
      console.log(rowIndex)
    }
    else
      this.selectedMarca = new MarcaCaldaie();
      this.editSidebarVisibile = !this.editSidebarVisibile;
  }

  public patchDataAfterSaveOrUpdate(editedMarca: MarcaCaldaie) {
    const savedOrUpdatedMarca: MarcaCaldaie = cloneDeep(editedMarca);
    if(this.selectedId)
      this.marcheList[this.selectedId] = savedOrUpdatedMarca;
    else
      this.marcheList.push(savedOrUpdatedMarca);
    delete this.selectedId;
    this.editSidebarVisibile = false;
  }

  public deleteData() {
    this.marcheService.deleteItem(this.selectedMarca.id)
      .pipe(
        tap(response => console.log(response)),
        tap(() => this.marcheList.splice(this.selectedId, 1)),
        tap(() => console.log(this.selectedMarca)),
        tap(() => this.deleteDialogVisible = false)
      )
      .subscribe();
  }
}

