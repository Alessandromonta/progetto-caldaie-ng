import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { UserData } from 'src/app/shared/models/userdata';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {

  constructor(
    public userService: UserService
  ) {}

  public checkIcon: IconDefinition = null;

  /**
   * TODO: Non so come arriveranno i dati, metto dei tipi fittizi
   */
  public caldaieSbloccate: string[] = [
    'caldaia riello 1',
    'caldaia riello 2',
    'altra caldaia'
  ];

  ngOnInit(): void {
    this.checkIcon = faCheck;
  }
}
