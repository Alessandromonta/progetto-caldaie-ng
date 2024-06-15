import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component'
import { AuthGuard } from './Auth/Guard/auth.guard';
import { LoginComponent } from './Components/login/login.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { MarcheComponent } from './Components/marche/marche.component';
import { CaldaieComponent } from './Components/caldaie/caldaie.component';
import { PacchettiComponent } from './Components/pacchetti/pacchetti.component';
import { SignupComponent } from './Components/signup/signup.component';
import { CrudComponent } from './Components/crud/crud.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AcquistaCaldaieComponent } from './pages/acquista-caldaie/acquista-caldaie.component';
import { DettaglioCaldaiaComponent } from './pages/dettaglio-caldaia/dettaglio-caldaia.component';
import { Caldaie } from './Models/Caldaie';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AcquistaPacchettiComponent } from './pages/acquista-pacchetti/acquista-pacchetti.component';
import { ProfiloComponent } from './pages/profilo/profilo.component';
import { IndividuazioneGuastiComponent } from './pages/individuazione-guasti/individuazione-guasti.component';
import { AccortezzeSostituzioneComponent } from './pages/accortezze-sostituzione/accortezze-sostituzione.component';
import { AreaRiservataComponent } from './pages/area-riservata/area-riservata.component';
import { IndividuazioniComponent } from './Components/individuazioni/individuazioni.component';
import { AccortezzeComponent } from './Components/accortezze/accortezze.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: AuthComponent,
    data: {
      signupFlag: false
    },
    canActivate: [AuthGuard]
  },
  { path: 'signup', component: AuthComponent,
    data: {
      signupFlag: true
    }
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'marche',
    component: ProductPageComponent,
    data: {
      notFullBackground: true
    },
    children: [
      {
        path: ':id',
        component: AcquistaCaldaieComponent,
        data: {
          notFullBackground: true
        },
        children: [
          {
            path: 'modelli/:id',
            component: DettaglioCaldaiaComponent
          }
        ]
      },
    ]
  },
  {
    path: "servizi",
    component: AcquistaPacchettiComponent,
    data: {
      notFullBackground: true
    }
  },
  {
    path: 'profilo',
    component: ProfiloComponent
  },
  {
    path: 'individuazione-guasti',
    component: IndividuazioneGuastiComponent
  },
  {
    path: 'accortezze-sostituzione',
    component: AccortezzeSostituzioneComponent
  },
  {
    path: 'area-riservata',
    component: AreaRiservataComponent,
    children: [
      { path: '', redirectTo: 'modelli', pathMatch: 'full' },
      { path: 'marche',     component: MarcheComponent },
      { path: 'modelli',    component: CaldaieComponent },
      { path: 'pacchetti',  component: PacchettiComponent },
      { path: 'individuazione-guasti',  component: IndividuazioniComponent },
      { path: 'accortezze-sostituzione', component: AccortezzeComponent }
    ]
  },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
