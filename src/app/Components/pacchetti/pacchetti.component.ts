import { Component, OnInit } from '@angular/core';
import { PacchettiService } from 'src/app/Services/pacchetti.service';

@Component({
  selector: 'app-pacchetti',
  templateUrl: './pacchetti.component.html',
  styleUrls: ['./pacchetti.component.less']
})
export class PacchettiComponent implements OnInit{
  pacchettiList: any[] = [];
  showAddPopup: boolean = false;
  showEditPopup: boolean = false;
  newPacchetto: string = '';
  editPacchettoId: number;
  editPacchettoNome: string = '';

  constructor(private pacchettiService: PacchettiService) {}


  ngOnInit(): void {
    this.loading = true; // Imposta il caricamento su true prima di iniziare il caricamento dei dati
    this.getPacchettiList(); // Chiamata per caricare i dati
  }

  loading: boolean = true;

  //#region   CRUD
  getPacchettiList(): void {
  this.pacchettiService.getItems().subscribe((pacchetti) => {
    this.pacchettiList = pacchetti;
    setTimeout(() => {
      // Dopo aver caricato i dati o completato il processo
      this.loading = false;
    }, 0);
  });
}

addPacchetti(): void {
  if (this.newPacchetto) {
    this.pacchettiService.addItem({ nome: this.newPacchetto }).subscribe((response) => {
      // Aggiorna la lista delle pacchetti dopo l'aggiunta
      this.getPacchettiList();
      this.newPacchetto = ''; 
      this.showAddPopup = false; // Chiudi il modulo popup
    });
  }
}

deletePacchetti(pacchettiId: number): void {
  this.pacchettiService.deleteItem(pacchettiId).subscribe(() => {
    // Aggiorna la lista delle marche dopo l'eliminazione
    this.getPacchettiList();
  });
}

updatePacchetti(): void {
  const updatedPacchetti = { id: this.editPacchettoId, nome: this.editPacchettoNome };

  this.pacchettiService.updateItem(this.editPacchettoId, updatedPacchetti).subscribe(() => {
    // Aggiorna la lista delle marche dopo la modifica
    this.getPacchettiList();
    this.editPacchettoNome = ''; // Resetta il campo del nome della Pacchetto
    this.showEditPopup = false; // Chiudi il modulo popup di modifica
  });
}
//#endregion


 //#region OLD POPUP
 openAddPacchettiPopup(): void {
  this.showAddPopup = true;
}

closeAddPacchettiPopup(): void {
  this.showAddPopup = false;
}

openEditPacchettiPopup(pacchetto: any): void {
  this.editPacchettoId = pacchetto.id;
  this.editPacchettoNome = pacchetto.nome;
  this.showEditPopup = true;
}

closeEditPacchettiPopup(): void {
  this.showEditPopup = false;
}
//#endregion
}
