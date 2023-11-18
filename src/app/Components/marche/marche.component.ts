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
  marcheList: MarcaCaldaie[] = [];
  selectedMarca: MarcaCaldaie;
  selectedId: number;
  showAddMarcaPopup: boolean = false;
  showEditMarcaPopup: boolean = false;
  newMarca: string = '';
  editMarcaId: number;
  editMarcaNome: string = '';

  constructor(private marcheService: MarcheService, private httpClient: HttpClient) {}

  loading: boolean = true;

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

  addMarca(): void {
    if (this.newMarca) {
      this.marcheService.addItem({ nome: this.newMarca }).subscribe((response) => {
        // Aggiorna la lista delle marche dopo l'aggiunta
        this.getMarcheList();
        this.newMarca = ''; // Resetta il campo del nome della marca
        this.showAddMarcaPopup = false; // Chiudi il modulo popup
      });
    }
  }

  deleteMarca(marcaId: number): void {
    this.marcheService.deleteItem(marcaId).subscribe(() => {
      // Aggiorna la lista delle marche dopo l'eliminazione
      this.getMarcheList();
    });
  }

  updateMarca(): void {
    const updatedMarca = { id: this.editMarcaId, nome: this.editMarcaNome };

    this.marcheService.updateItem(this.editMarcaId, updatedMarca).subscribe(() => {
      // Aggiorna la lista delle marche dopo la modifica
      this.getMarcheList();
      this.editMarcaNome = ''; // Resetta il campo del nome della marca
      this.showEditMarcaPopup = false; // Chiudi il modulo popup di modifica
    });
  }
  //#endregion

  //#region NEW POPUP


  //#endregion

  //#region OLD POPUP
  openAddMarcaPopup(): void {
    this.showAddMarcaPopup = true;
  }

  closeAddMarcaPopup(): void {
    this.showAddMarcaPopup = false;
  }

  openEditMarcaPopup(marca: any): void {
    this.editMarcaId = marca.id;
    this.editMarcaNome = marca.nome;
    this.showEditMarcaPopup = true;
  }

  closeEditMarcaPopup(): void {
    this.showEditMarcaPopup = false;
  }
//#endregion
  public viewSidebarVisibile: boolean = false;
  public editSidebarVisibile: boolean = false;
  public deleteDialogVisible: boolean = false;
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

