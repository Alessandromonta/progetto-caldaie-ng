import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/user-store-service.service';
import { UserService } from 'src/app/services/user.service';
import { UserData } from 'src/app/shared/models/userdata';
import ValidateForm from 'src/app/helpers/validationform';
import { AuthComponent } from 'src/app/pages/auth/auth.component';
import { MainResponse } from 'src/app/Models/MainResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private userStore: UserStoreService,
    private auth: AuthComponent
  ) {}

  public accessToken: string = "";
  public logged: boolean = null;

  ngOnInit(): void {
    this.userService.initUserData();
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  OnForgot(){
    this.auth.registerFlag = true;
  }

  /**
   * TODO: Scrivere logica autenticazione con relativi endpoint
   */
  public onLogin() {
    if(this.loginForm.valid){
      debugger
      console.log("loggato: " + this.loginForm.value)
      this.userService.loginUser(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res)
        },
        error: (e)=>{
          alert(e?.error.message)
        }
      })
      //this.router.navigate(['logged'], { relativeTo: this.activatedRoute });
      this.logged = true;
    }
    else{
      console.log("NON loggato")
      this.logged = false;
    }
    
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      
      this.userService.loginUser(this.loginForm.value)
      .subscribe((response: MainResponse) => {
        debugger;
        var token = response.content;
        if (token) {
          // Esegui azioni per autenticare l'utente
          console.log('Token di autenticazione (loggato):', token);
          this.logged = true;
          this.accessToken = token
  
          //this.userService.getCurrentUser(this.userService.UserLogin.nomeUtente, this.userService.UserLogin.password)
        } else {
          // Messaggio di errore per utente non trovato o credenziali errate
          console.log('Utente non trovato o credenziali errate', token);
          this.logged = false;
          this.accessToken = ""
        }
      })
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }
}
