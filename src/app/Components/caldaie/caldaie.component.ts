import { Component, OnInit } from '@angular/core';
import { CaldaieService } from 'src/app/Services/caldaie.service';

@Component({
  selector: 'app-caldaie',
  templateUrl: './caldaie.component.html',
  styleUrls: ['./caldaie.component.less']
})
export class CaldaieComponent implements OnInit{
  caldaieList: any[] = [];
  showAddPopup: boolean = false;
  showEditPopup: boolean = false;
  newCaldaia: string = '';
  editCaldaiaId: number;
  editCaldaiaNome: string = '';

  constructor(private caldaieService: CaldaieService) {}

  loading: boolean = true;

  ngOnInit(): void {
    this.loading = true; // Imposta il caricamento su true prima di iniziare il caricamento dei dati
    this.getCaldaieList(); // Chiamata per caricare i dati
  }

//#region   CRUD
getCaldaieList(): void {
  this.caldaieService.getItems().subscribe((marche) => {
    this.caldaieList = marche;
    setTimeout(() => {
      // Dopo aver caricato i dati o completato il processo
      this.loading = false;
    }, 0);
  });
}

addCaldaia(): void {
  if (this.newCaldaia) {
    this.caldaieService.addItem({ nome: this.newCaldaia }).subscribe((response) => {
      // Aggiorna la lista delle caldaie dopo l'aggiunta
      this.getCaldaieList();
      this.newCaldaia = ''; 
      this.showAddPopup = false; // Chiudi il modulo popup
    });
  }
}

deleteCaldaia(caldaiaId: number): void {
  this.caldaieService.deleteItem(caldaiaId).subscribe(() => {
    // Aggiorna la lista delle marche dopo l'eliminazione
    this.getCaldaieList();
  });
}

updateCaldaia(): void {
  const updatedCaldaia = { id: this.editCaldaiaId, nome: this.editCaldaiaNome };

  this.caldaieService.updateItem(this.editCaldaiaId, updatedCaldaia).subscribe(() => {
    // Aggiorna la lista delle marche dopo la modifica
    this.getCaldaieList();
    this.editCaldaiaNome = ''; // Resetta il campo del nome della caldaia
    this.showEditPopup = false; // Chiudi il modulo popup di modifica
  });
}
//#endregion


 //#region OLD POPUP
  openAddCaldaiaPopup(): void {
    this.showAddPopup = true;
  }

  closeAddCaldaiaPopup(): void {
    this.showAddPopup = false;
  }

  openEditCaldaiaPopup(caldaia: any): void {
    this.editCaldaiaId = caldaia.id;
    this.editCaldaiaNome = caldaia.nome;
    this.showEditPopup = true;
  }

  closeEditCaldaiaPopup(): void {
    this.showEditPopup = false;
  }
//#endregion
}
