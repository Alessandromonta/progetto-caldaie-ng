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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: AuthComponent,
    data: {
      signupFlag: false
    }
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
  { path: 'Marche',     component: MarcheComponent },
  { path: 'Caldaie',    component: CaldaieComponent },
  { path: 'Pacchetti',  component: PacchettiComponent },
  {
    path: 'Logout',
    component: LogoutComponent,
  },
  {
    path: 'marche',
    component: ProductPageComponent,
    children: [
      {
        path: ':id',
        component: AcquistaCaldaieComponent,
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
    component: AcquistaPacchettiComponent
  },
  {
    path: 'profilo',
    component: ProfiloComponent
  },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
