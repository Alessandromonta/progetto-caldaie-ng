import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Auth/Service/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  public loginForm: FormGroup;
  public loginError: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
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
