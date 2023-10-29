import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Auth/Service/auth-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public checkIcon: IconDefinition = null;
}
