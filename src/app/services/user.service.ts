import { Injectable } from '@angular/core';
import { UserData } from '../shared/models/userdata';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public userData: UserData = null;

  public initUserData(): void {
    this.userData = new UserData();
  }
}
