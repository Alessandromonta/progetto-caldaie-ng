import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, SequenceError, catchError, map, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/Auth/Service/auth.service';
import { Utenti } from 'src/app/Models/utenti';
import { UtentiService } from 'src/app/Services/utenti.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit{
  public loginForm!: FormGroup;
  public loginError: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private utentiService: UtentiService
  ) {
    this.loginForm = this.formBuilder.group({
      //email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

      this.authService.login(username, password)
        .pipe(
          map(response => {
            // Gestisci la risposta dell'API dopo un login riuscito
            if (response) {
              // Memorizza il token nella local storage
              localStorage.setItem('bearerToken', response);

              // Esegui il reindirizzamento o altre azioni necessarie
              return this.authService.getUserId(); // Implementa questo metodo nel tuo servizio

            } else {
              this.loginError = true;
            }
          }),
          switchMap((userId: number) =>
            this.utentiService.getItemsFromItemId(userId)
          ),
          tap((user: any) => {
            localStorage.setItem('userData', JSON.stringify(user.content));
            this.authService.utenteLoggato = user.content;
          }),
          catchError((err: Error) => {
            return EMPTY;
          })
        )
        .subscribe({
          error: error => {
            // Gestisci errori durante la chiamata API
            this.loginError = true;
          },
          complete: () => {
            this.router.navigate(['profilo']);
          }
        });
    }
  }
}
