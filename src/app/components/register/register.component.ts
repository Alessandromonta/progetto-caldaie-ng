import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserData } from 'src/app/shared/models/userdata';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit{

  
  constructor(
    public userService: UserService
  ) {}

  ngOnInit() {
    this.userService.initUserData();
  }

  public onRegister() {
    //console.log("registrato (maybe)")
    if(this.userService.userData.password != this.userService.userData.confirmPassword)
    {
      alert("Le password Non coincidono")
    }
    else{
      this.userService.RegisterUser(this.userService.userData.username, this.userService.userData.email, this.userService.userData.password)
    }
  }
}
