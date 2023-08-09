import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Utenti } from 'src/app/Models/utenti';
import ValidateForm from 'src/app/helpers/validationform';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit{
  signupForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      username: [''],
      email: [''],
      confirmPassword: [''],
      password: [''],
    });
  }

  ngOnInit() {
    //this.authService.initUserData();
  }

  public onRegister() {
    //console.log("registrato (maybe)")
    if(this.signupForm.value.password != this.signupForm.value.confirmPassword)
    {
      alert("Le password Non coincidono")
    }
    else{
      this.authService.RegisterUser(this.signupForm.value).subscribe((res) => {
        if (res.result) {
          this.signupForm.reset();
          this.router.navigate(['login']);
        }
      });
    }
  }

  onSubmit() {
    let data = this.signupForm;
    if (data.valid) 
    {
      this.authService.loginUser(this.signupForm.value)
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
