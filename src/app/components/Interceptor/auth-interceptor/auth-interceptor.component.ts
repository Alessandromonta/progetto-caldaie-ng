import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { TokenApiModel } from 'src/app/Models/token-api.model';
import { UserService } from 'src/app/services/user.service';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

@Component({
  selector: 'app-auth-interceptor',
  templateUrl: './auth-interceptor.component.html',
  styleUrls: ['./auth-interceptor.component.less']
})
@Injectable()
export class AuthInterceptorComponent implements HttpInterceptor {
  constructor(private auth: UserService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = 'Il_tuo_bearer_token'; // Assumi che accessToken contenga il Bearer Token
  debugger
    if (accessToken) {
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      return next.handle(authReq);
    }

    return next.handle(request);
  }

  handleUnAuthorizedError(req: HttpRequest<any>, next: HttpHandler){
    let tokeApiModel = new TokenApiModel();
    tokeApiModel.accessToken = this.auth.getToken()!;
    tokeApiModel.refreshToken = this.auth.getRefreshToken()!;
    return this.auth.renewToken(tokeApiModel)
    .pipe(
      switchMap((data:TokenApiModel)=>{
        this.auth.storeRefreshToken(data.refreshToken);
        this.auth.storeToken(data.accessToken);
        req = req.clone({
          setHeaders: {Authorization:`Bearer ${data.accessToken}`}  // "Bearer "+myToken
        })
        return next.handle(req);
      }),
      catchError((err)=>{
        return throwError(()=>{
          alert("Token is expired, Please Login again");
          this.router.navigate(['login'])
        })
      })
    )
  }
}
