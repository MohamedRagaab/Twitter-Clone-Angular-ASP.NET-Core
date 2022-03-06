import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  IsLogedIn(){
    return true;
  }
  url = "https://localhost:44386/api/Users";
  
  constructor(private http:HttpClient) { }
  users:User[] = [];
  user!:User ;
  /* Get All Users *******************************************************************************************************************************/
  getAllUsers(){
    this.http.get<User[]>(this.url).subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

    /* Get Login User *******************************************************************************************************************************/
    getLoginUser(){

      this.http.get<User>(this.url+"?email=").subscribe(data => {
        console.log(data);
        this.user = data;
      });
    }
  
}
