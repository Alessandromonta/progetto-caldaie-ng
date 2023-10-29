import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './Auth/Component/auth/auth.component';
import { AuthGuard } from './Auth/Guard/auth.guard';

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
  /*{
    path: 'profilo-utente', 
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'elenco-pacchetti',
    component: PackagesListComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
