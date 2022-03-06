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
  });

  constructor(
    private router: Router,
    public httpService: AuthService
  ) {}
  
  url = 'https://localhost:44386/api/Users';

  ngOnInit(): void {
   // this.httpService.getAllUsers();
  }
  onSubmit(){
    console.log(this.loginForm.value);
    this.router.navigate(['/home']);
  }
}
