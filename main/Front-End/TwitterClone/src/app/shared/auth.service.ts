import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  IsLogedIn(){
    return false;
  }
  url = "https://localhost:44386/api/Users";
  
  constructor(private http:HttpClient) { }
  users:User[] = [];
  getAllUsers(){
    this.http.get<User[]>(this.url).subscribe(data => {
      console.log(data);
      this.users = data;
    });
    console.log(this.users);
  }
}
