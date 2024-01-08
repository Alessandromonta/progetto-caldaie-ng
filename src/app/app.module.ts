import { APP_INITIALIZER, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';

import {MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatExpansionModule, } from '@angular/material/expansion';
import {BrowserAnimationsModule, NoopAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthInterceptor } from './Auth/auth.interceptor';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { LoginComponent } from './Components/login/login.component';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { CrudComponent } from './Components/crud/crud.component';
import { MarcheComponent } from './Components/marche/marche.component';
import { MarcaEditComponent } from './Components/marca-edit/marca-edit.component';
import { MarcaViewComponent } from './Components/marca-view/marca-view.component';
import { CaldaieComponent } from './Components/caldaie/caldaie.component';
import {CaldaiaEditComponent} from './Components/caldaia-edit/caldaia-edit.component';
import { ErroreEditComponent } from './Components/errore-edit/errore-edit.component';
import { ErroreViewComponent } from './Components/errore-view/errore-view.component';
import { PacchettiComponent } from './Components/pacchetti/pacchetti.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LoadingComponent} from  './Components/loading/loading.component';

//prime ng
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from "primeng/password";
import {TableModule} from 'primeng/table';
import {SidebarModule} from 'primeng/sidebar';
import {DialogModule} from 'primeng/dialog';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PanelModule} from 'primeng/panel';
import {AnimateOnScrollModule} from 'primeng/animateonscroll';
import { RippleModule } from 'primeng/ripple';
import { PaginatorModule } from "primeng/paginator";
import {InputTextModule} from 'primeng/inputtext';
import {TabMenuModule} from 'primeng/tabmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { CaldaiaViewComponent } from './Components/caldaia-view/caldaia-view.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { SignupComponent } from './Components/signup/signup.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LogoutComponent } from './Components/logout/logout.component';
import { AcquistaCaldaieComponent } from './pages/acquista-caldaie/acquista-caldaie.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { DettaglioCaldaiaComponent } from './pages/dettaglio-caldaia/dettaglio-caldaia.component';
import { AuthComponent } from './pages/auth/auth.component';

const initializePrimeNgConfig = (primeConfig: PrimeNGConfig) => () => {
  primeConfig.ripple = true;
}

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => localStorage.getItem('bearerToken'), // Nome della chiave in cui hai memorizzato il token nella local storage
    allowedDomains: ['autoclima-001-site1.atempurl.com'],
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
    MarcaEditComponent,
    MarcaViewComponent,
    CaldaieComponent,
    CaldaiaEditComponent,
    CaldaiaViewComponent,
    ErroreEditComponent,
    ErroreViewComponent,
    PacchettiComponent,
    LoadingComponent,
    SignupComponent,
    LogoutComponent,
    ProductPageComponent,
    AcquistaCaldaieComponent,
    DettaglioCaldaiaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    BreadcrumbModule,
    ScrollPanelModule,
    PanelModule,
    AnimateOnScrollModule,
    RippleModule,
    PaginatorModule,
    InputNumberModule,
    TabMenuModule,
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
    TableModule,
    SidebarModule,
    DialogModule,
    MatSnackBarModule,
    FontAwesomeModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide:JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      }
    })
  ],
  providers: [
    provideAnimations(),
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
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
