import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    public httpService: AuthService
  ) {}
  
  url = 'https://localhost:44386/api/Users';

  ngOnInit(): void {
  
  }
  onSubmit(){
    this.httpService.getLoginUser(this.loginForm.value.email);
    console.log(this.loginForm.value);
    // if(this.loginForm.value.password == '221999'){   //this.httpService.user.password
    //   this.router.navigate(['/home']);
    // }else{
    //   this.router.navigate(['/login']);
    // }
    this.router.navigate(['/home']);
  }
  onClick(){
    this.router.navigate(['/register']);
  }
}
