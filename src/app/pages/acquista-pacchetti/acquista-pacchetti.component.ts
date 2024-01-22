import { Component } from '@angular/core';
import { Pacchetti } from 'src/app/Models/Pacchetti';
import { Servizi } from 'src/app/Models/Servizi';

@Component({
  selector: 'app-acquista-pacchetti',
  templateUrl: './acquista-pacchetti.component.html',
  styleUrl: './acquista-pacchetti.component.less'
})
export class AcquistaPacchettiComponent {
  public pacchettiList: Pacchetti[] = [];
  public servizi: Servizi[] = [];

  constructor() {}

  ngOnInit(): void {
    this.pacchettiList.push(
      {
        nome: "Singola caldaia",
        prezzo: 24.99,
        sconto: 19.99,
        attivo: true
      },
      {
        nome: 'Pacchetto "1 caldaia"',
        prezzo: 34.99,
        sconto: 24.99,
        attivo: true
      },
      {
        nome: 'Pacchetto "Friends"',
        prezzo: 44.99,
        sconto: 29.99,
        attivo: true
      },
      {
        nome: 'Pacchetto "Risolutore"',
        prezzo: 24.99,
        sconto: 19.99,
        attivo: true
      },
      {
        nome: 'Pacchetto "Exclusive"',
        prezzo: 119.98,
        sconto: 99.98,
        attivo: true
      },
      {
        nome: 'Pacchetto "All-in"',
        prezzo: 249.98,
        sconto: 199.98,
        attivo: true
      }
    );

    this.servizi.push(
      {
        nomeServizio: "Sblocca la risoluzione a tutti i guasti di tutte le caldaie di ogni marca"
      },
      {
        nomeServizio: "Sblocca pacchetto accortezze per la sostituzione"
      },
      {
        nomeServizio: " il pacchetto individuazione guasti"
      }
    );
  }
}
