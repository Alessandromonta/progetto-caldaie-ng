import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Auth/Service/auth.service';
import { Utenti } from 'src/app/Models/utenti';

@Component({
  selector: 'app-individuazione-guasti',
  templateUrl: './individuazione-guasti.component.html',
  styleUrl: './individuazione-guasti.component.less'
})
export class IndividuazioneGuastiComponent implements OnInit {
  public utente: Utenti;
  public risoluzioneGuastiIstruzioni: string[];
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
      this.utente = new Utenti();
      this.utente.risoluzioneGuastiFlag = true;
      if(this.utente.risoluzioneGuastiFlag) {
        this.risoluzioneGuastiIstruzioni = [];
        this.risoluzioneGuastiIstruzioni.push(
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
