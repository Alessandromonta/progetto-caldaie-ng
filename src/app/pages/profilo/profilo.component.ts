import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/Service/auth.service';
import { Caldaie } from 'src/app/Models/Caldaie';
import { Utenti } from 'src/app/Models/utenti';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.less'
})
export class ProfiloComponent {
  public utente: Utenti;
  public caldaieSbloccate: Caldaie[] = [];
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.utente = this.authService.utenteLoggato;

    this.caldaieSbloccate.push(
      ...[
        {
          idMarca: 1,
          nome: "ladro",
          descrizione: "asda",
          id: 1
        },
        {
          "idMarca": 1,
          "nome": "ADER3",
          "descrizione": "SDAD",
          "id": 2
        }
      ]
    );
  }

  public viewDettaglioCaldaia(selectedCaldaia: Caldaie) {
    this.router.navigate([`marche/${selectedCaldaia.idMarca}/modelli/${selectedCaldaia.id}`]);
  }
}
