import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { MainCardComponent } from './components/main-card/main-card.component';
import { CardModule } from 'primeng/card';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule, } from '@angular/material/expansion';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { PrimeNGConfig } from 'primeng/api';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { PackagesListComponent } from './pages/packages-list/packages-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthInterceptorComponent } from './components/Interceptor/auth-interceptor/auth-interceptor.component';
 
const initializePrimeNgConfig = (primeConfig: PrimeNGConfig) => () => {
  primeConfig.ripple = true;
}

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    PackagesListComponent,
    AuthInterceptorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
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
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptorComponent,
      useFactory: initializePrimeNgConfig,
      deps: [PrimeNGConfig],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
