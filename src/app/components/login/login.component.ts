import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserData } from 'src/app/shared/models/userdata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    public userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public logged: boolean = null;

  ngOnInit() {
    this.userService.initUserData();
  }

  /**
   * TODO: Scrivere logica autenticazione con relativi endpoint
   */
  public onLogin() {
    console.log("loggato")
    //this.router.navigate(['logged'], { relativeTo: this.activatedRoute });
    this.logged = true;
  }
}
