import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
  isUserLoggedIn(){
    if(this.getItem('firstName') == null){
      return false;
    }else{
      return true;
    }
  }

  logOut(){
    this.removeItem('firstName');
    this.removeItem('lastName');
  }

  onSignIn(firstName:string , lastName:string){
    this.setItem('firstName',firstName);
    this.setItem('lastName',lastName);
  }

  getFirstName(){
    return this.getItem('firstName')
  }
  getLastName(){
    return this.getItem('lastName')
  }
}
