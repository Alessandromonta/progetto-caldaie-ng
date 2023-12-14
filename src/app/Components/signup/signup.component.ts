import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/Service/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit{
  public signupForm!: FormGroup;
  public signupError: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, this.matchPassword.bind(this)]],
    });
  }

  matchPassword(control: AbstractControl): { [key: string]: boolean } | null {
    if(!this.signupForm){return null;}
    
    const password = this.signupForm.get('password')?.value;
    const confirmPassword = control.value;

    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }

  

  onSubmit() {
    console.log('Risultato della chiamata POST Signup:');
    if (this.signupForm.valid) {
      const username = this.signupForm.get('username').value;
      const email = this.signupForm.get('email').value;
      const password = this.signupForm.get('password').value;
      const confirmPassword = this.signupForm.get('confirmPassword').value;

      console.log('Risultato della chiamata POST Signup:');
      this.authService.signup(username, email, password, confirmPassword, 0, 0).subscribe(
        (response: any) => {
          // Gestisci la risposta dell'API dopo un login riuscito
          if (response) {
            
            // Esegui il reindirizzamento o altre azioni necessarie
            this.router.navigate(['/login']);
          } else {
            // Il server non ha restituito un token valido, gestisci l'errore
            this.signupError = true;
          }
        },
        (error) => {
          // Gestisci errori durante la chiamata API
          this.signupError = true;
        }
      );
    }
  }


}
