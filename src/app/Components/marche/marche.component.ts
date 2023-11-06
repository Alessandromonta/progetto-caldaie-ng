import { Component, OnInit } from '@angular/core';
import { MarcheService } from 'src/app/Services/marche.service';

@Component({
  selector: 'app-marche',
  templateUrl: './marche.component.html',
  styleUrls: ['./marche.component.less']
})
export class MarcheComponent implements OnInit {
  marcheList: any[] = [];
  showAddMarcaPopup: boolean = false;
  showEditMarcaPopup: boolean = false;
  newMarca: string = '';
  editMarcaId: number;
  editMarcaNome: string = '';

  constructor(private marcheService: MarcheService) {}

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
  

}

