import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validationform';
import { AuthService } from 'src/app/shared/auth.service';
import { AuthComponent } from 'src/app/pages/auth/auth.component';
import { Login } from 'src/app/shared/modelsDTO/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public utente: Login;

  constructor(
    //private activatedRoute: ActivatedRoute,
    public fb: FormBuilder,
    public authService: AuthService,
    public auth: AuthComponent,
    public router: Router
  ) {
    this.loginForm = this.fb.group({
      //email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  public accessToken: string = "";
  public logged: boolean = null;
  

  ngOnInit(): void {
    //this.authService.initUserData();
  }

  OnForgot(){
    this.auth.registerFlag = true;
  }

  onSubmit() {
    let data = this.loginForm;
    if (data.valid) 
    {
      this.authService.loginUser(this.loginForm.value)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res);
        console.log(res);
        this.router.navigate(['profilo-utente']);
      },
      (error) => {
        console.error('Error signing in:', error);
      });
    }
    else 
    {
      debugger
      ValidateForm.validateAllFormFields(data);
    }
  }
}
