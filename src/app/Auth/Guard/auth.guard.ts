//Qui verifico se l'utente è autenticato e se non lo è ritorna alla pagina di login
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Qui dovresti implementare la logica per verificare se l'utente è autenticato.
    // Ad esempio, verifica se l'utente ha un token valido o altri criteri di autenticazione.

    // Se l'utente è autenticato, restituisci true per consentire l'accesso alla rotta.
    // Altrimenti, reindirizza l'utente alla pagina di login e restituisci false.

    const isAuthenticated = true; // Sostituisci con la tua logica di autenticazione.
    
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']); // Reindirizza all pagina di login se l'utente non è autenticato.
      return false;
    }
  }
}
