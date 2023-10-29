import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './Auth/Component/auth/auth.component';
import { AuthGuard } from './Auth/Guard/auth.guard';
import { LoginComponent } from './Components/login/login.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { MarcheComponent } from './Components/marche/marche.component';
import { CaldaieComponent } from './Components/caldaie/caldaie.component';
import { PacchettiComponent } from './Components/pacchetti/pacchetti.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, 
    data: { 
      registerFlag: false 
    }
  },
  { path: 'registrati', component: AuthComponent, 
    data: { 
      registerFlag: true
    } 
  },
  {
    path: 'user-profile', 
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  }, 
  { path: 'Marche', component: MarcheComponent },
  { path: 'Caldaie', component: CaldaieComponent },
  { path: 'Pacchetti', component: PacchettiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
