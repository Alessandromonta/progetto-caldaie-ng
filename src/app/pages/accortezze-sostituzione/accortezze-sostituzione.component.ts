import { Component } from '@angular/core';
import { AuthService } from 'src/app/Auth/Service/auth.service';
import { Utenti } from 'src/app/Models/utenti';

@Component({
  selector: 'app-accortezze-sostituzione',
  templateUrl: './accortezze-sostituzione.component.html',
  styleUrl: './accortezze-sostituzione.component.less'
})
export class AccortezzeSostituzioneComponent {
  public utente: Utenti;
  public accortezzeSostituzioneIstruzioni: string[];
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
      this.utente = new Utenti();
      this.utente.accortezzeSostituzioneFlag = true;
      if(this.utente.accortezzeSostituzioneFlag) {
        this.accortezzeSostituzioneIstruzioni = [];
        this.accortezzeSostituzioneIstruzioni.push(
          "Risoluzione 1",
          "Risoluzione 3",
          "Risoluzione 2",
          "Risoluzione 4",
          "Risoluzione 12",
          "Risoluzione 1",
          "Risoluzione 3",
          "Risoluzione 2",
          "Risoluzione 4",
          "Risoluzione 12",
          "Risoluzione 1",
          "Risoluzione 3",
          "Risoluzione 2",
          "Risoluzione 4",
          "Risoluzione 12",
          "Risoluzione 1",
          "Risoluzione 3",
          "Risoluzione 2",
          "Risoluzione 4",
          "Risoluzione 12",
          "Risoluzione 1",
          "Risoluzione 3",
          "Risoluzione 2",
          "Risoluzione 4",
          "Risoluzione 12",
          "Risoluzione 1",
          "Risoluzione 3",
          "Risoluzione 2",
          "Risoluzione 4",
          "Risoluzione 12",
          "Risoluzione 1",
          "Risoluzione 3",
          "Risoluzione 2",
          "Risoluzione 4",
          "Risoluzione 12",
          "Risoluzione 1",
          "Risoluzione 3",
          "Risoluzione 2",
          "Risoluzione 4",
          "Risoluzione 12",
          "Risoluzione 1 Risoluzione 1 Risoluzione 1 Risoluzione 1 Risoluzione 1Risoluzione 1Risoluzione 1Risoluzione 1Risoluzione 1Risoluzione 1",
          "Risoluzione 3",
          "Risoluzione 2",
          "Risoluzione 4",
          "Risoluzione 12",
          "Risoluzione 1",
          "Risoluzione 3",
          "Risoluzione 2",
          "Risoluzione 4",
          "Risoluzione 12",
          "Risoluzione 1",
          "Risoluzione 3",
          "Risoluzione 2",
          "Risoluzione 4",
          "Risoluzione 12",
          "Risoluzione 1",
          "Risoluzione 3",
          "Risoluzione 2",
          "Risoluzione 4",
          "Risoluzione 12",
        )
      }
  }
}
