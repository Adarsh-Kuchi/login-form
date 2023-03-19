import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) {}

  baseUrl = 'https://snapkaro.com/eazyrooms_staging/api/';


  registerUser(data: any) {
    console.log(data)
    return this.http.post(this.baseUrl + 'user_registeration', data);

  }

  loginUser(data: any) {
    console.log("hai")
    return this.http.post(this.baseUrl + 'userlogin', data);
  }
}
