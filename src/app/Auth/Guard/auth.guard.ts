import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../Service/auth.service';

export const AuthGuard: CanActivateFn = (route, state): UrlTree | boolean =>  {
  return (
    !inject(AuthService).getToken ?
      true :
      inject(Router).createUrlTree(['profilo'])
  );
}
