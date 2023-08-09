import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {

  constructor(
    public authService: AuthService
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
