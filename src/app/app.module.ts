import { APP_INITIALIZER, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';

import {MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardModule} from '@angular/material/card';
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
import { CrudComponent } from './Components/crud/crud.component';
import { MarcheComponent } from './Components/marche/marche.component';
import { CaldaieComponent } from './Components/caldaie/caldaie.component';
import { PacchettiComponent } from './Components/pacchetti/pacchetti.component';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LoadingComponent} from  './Components/loading/loading.component';

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
    CrudComponent,
    MarcheComponent,
    CaldaieComponent,
    PacchettiComponent,
    LoadingComponent
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
    MatIconModule,
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    MatDividerModule,
    MatProgressSpinnerModule,
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
