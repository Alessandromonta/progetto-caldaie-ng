import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/Service/auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar,) {}

  ngOnInit(): void {

      this.authService.logout().subscribe(
        (data) => {
          let removeToken = localStorage.removeItem('bearerToken');
  
          console.log("logout eseguito: " + data);
  
          if (removeToken == null) {
            this.router.navigate(['/']);
            console.log("token removed");
            this.openSnackBar("Logout effettuato con successo", "Ok")
          }
        },
        (error) => {
          console.error('Errore durante il logout', error);
        }
      );
        
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
