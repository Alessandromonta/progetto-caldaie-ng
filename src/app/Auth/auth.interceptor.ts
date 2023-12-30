import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../Auth/Service/auth-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Esegui qui la logica per l'aggiunta dell'header del token Bearer alla richiesta HTTP
    const token = this.authService.getToken();

    // Verifica se la richiesta è una richiesta di login
    const isLoginRequest = req.url.includes('/Login');

    if (token && !isLoginRequest) {
      console.log("test: " + isLoginRequest);
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(req).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            // Gestisci l'errore di autorizzazione qui, ad esempio, reindirizza l'utente al login.
            // Puoi anche implementare una logica per gestire la disconnessione dell'utente o pulire il token.
            this.authService.logout(); // Esempio: chiama il metodo logout del servizio AuthService
          }
        }

        return throwError(error);
      })
    );
  }
}
