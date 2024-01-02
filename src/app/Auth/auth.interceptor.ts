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

    // Verifica se la richiesta è una richiesta di login
    const isLoginRequest = req.url.includes('/Login');

    if (!isLoginRequest) {
      const token = this.authService.getToken();
      if(token){
        console.log("bearer mandato: " + isLoginRequest);
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    }
    else
    {
      req = req.clone({
        setHeaders: {
          Authorization: ``,
        },
      });
      this.authService.removeToken()
      console.log("bearer non mandato: " + this.authService.getToken());
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
