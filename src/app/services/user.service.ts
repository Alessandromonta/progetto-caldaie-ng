import { Injectable } from '@angular/core';
import { UserData } from '../shared/models/userdata';
import { UtentiLogin } from '../shared/modelsDTO/utentiLoginDTO';
import { UtentiRegister } from '../shared/modelsDTO/utentiRegisterDTO';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'
import { MainResponse } from '../Models/MainResponse';
import { TokenApiModel } from '../Models/token-api.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://localhost:7173/api/User';
  private userPayload:any;

  constructor(private http: HttpClient, private router: Router) { 
    this.userPayload = this.decodedToken();
  }
  

  public userData: UserData = null;
  public userRegister: UtentiRegister = null;
  public UserLogin: UtentiLogin = null;

  public initUserData(): void {
    this.userData = new UserData();
  }

  public RegisterUser(username: string, email: string, password: string){
    this.userRegister = new UtentiRegister( username, email, password )
    return this.http.post<any>(`${this.baseUrl}`, this.userRegister)
  }

  public loginUser(loginObj: any): Observable<MainResponse> {
    if (loginObj.username.indexOf('@') !== -1) {
        loginObj.email = loginObj.username;
        loginObj.username = null;
    }
    
    const userLogin = new UtentiLogin(loginObj.username, loginObj.email, loginObj.password);
    return this.http.post<MainResponse>(this.baseUrl + '/Login', userLogin)
}


  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }
  storeRefreshToken(tokenValue: string){
    localStorage.setItem('refreshToken', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }
  getRefreshToken(){
    return localStorage.getItem('refreshToken')
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }

  decodedToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken(token)
  }

  getfullNameFromToken(){
    if(this.userPayload)
    return this.userPayload.name;
  }

  getRoleFromToken(){
    if(this.userPayload)
    return this.userPayload.role;
  }

  renewToken(tokenApi : TokenApiModel){
    return this.http.post<any>(`${this.baseUrl}refresh`, tokenApi)
  }
}
