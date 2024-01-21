import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/Auth/Service/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {

  public checkIcon: IconDefinition = null;
  isOwner: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Controlla il ruolo dell'utente ottenuto dal servizio di autenticazione
    const userRole = this.authService.getUserRole(); // Implementa questo metodo nel tuo servizio

    // Verifica se l'utente è un "Owner" o ha il grado appropriato
    if (userRole === '1' ) {
      this.isOwner = true;
    }
    else{
      this.isOwner = false;
    }
  }

  
}
