import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/Service/auth-service.service';

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
    public router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      //email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    //
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

      this.authService.login(username, password).subscribe(
        (response: any) => {
          // Gestisci la risposta dell'API dopo un login riuscito
          if (response) {
            // Memorizza il token nella local storage
            localStorage.setItem('bearerToken', response);
            
            // Esegui il reindirizzamento o altre azioni necessarie
            this.router.navigate(['/user-profile']);
          } else {
            // Il server non ha restituito un token valido, gestisci l'errore
            this.loginError = true;
          }
        },
        (error) => {
          // Gestisci errori durante la chiamata API
          this.loginError = true;
        }
      );
    }
  }

}
