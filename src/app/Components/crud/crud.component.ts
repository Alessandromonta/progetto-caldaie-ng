import { Component } from '@angular/core';
import { AuthService } from 'src/app/Auth/Service/auth-service.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.less']
})
export class CrudComponent {

  constructor(private authService: AuthService) {}

  /*LogoutUser(){
    this.authService.logout();
  }*/
}
