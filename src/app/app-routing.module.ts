import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PackagesListComponent } from './pages/packages-list/packages-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: AuthComponent, 
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
    path: 'profilo-utente', 
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'elenco-pacchetti',
    component: PackagesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
