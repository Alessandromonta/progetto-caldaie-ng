import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule, } from '@angular/material/expansion';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthInterceptor } from './Auth/auth.interceptor';
import { AuthComponent } from './Auth/Component/auth/auth.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { LoginComponent } from './Components/login/login.component';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
 
const initializePrimeNgConfig = (primeConfig: PrimeNGConfig) => () => {
  primeConfig.ripple = true;
}

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => localStorage.getItem('bearerToken'), // Nome della chiave in cui hai memorizzato il token nella local storage
    allowedDomains: ['autoclima-001-site1.atempurl.com'], // Sostituisci con il tuo dominio
  };
}

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserProfileComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    NoopAnimationsModule,
    MatDividerModule,
    FontAwesomeModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide:JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      }
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializePrimeNgConfig,
      deps: [PrimeNGConfig],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
