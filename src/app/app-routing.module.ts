import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './Auth/Component/auth.component';
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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, 
    data: { 
      registerFlag: false 
    }
  },
  { path: 'signup', component: SignupComponent, 
    data: { 
      registerFlag: true
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
    path: 'acquista-prodotti', 
    component: ProductPageComponent
  },
  {
    path: 'marca/:nome',
    component: AcquistaCaldaieComponent
  }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
