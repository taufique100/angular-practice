import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLoggedIn():boolean{
    return !!localStorage.getItem('userToken');
  }

  getToken():string | null{
    return localStorage.getItem('userToken');
  }

  login(token: string){
    localStorage.setItem('userToken', token);
  }

  logout(){
    return localStorage.removeItem('userToken')
  }

}
