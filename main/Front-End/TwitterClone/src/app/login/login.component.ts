import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    public httpService: AuthService
  ) {}

  url = 'https://localhost:44386/api/Users';

  ngOnInit(): void {
    this.httpService.getAllUsers();
  }
}
