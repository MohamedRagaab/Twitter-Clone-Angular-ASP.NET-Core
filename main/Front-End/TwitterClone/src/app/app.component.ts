import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService : AuthService, private router: Router ){ }
  title = 'TwitterClone';
  islogin =false;
  ngOnInit(): void {
    if(this.authService.IsLogedIn() == true){
      this.router.navigate(['']);
      this.islogin = true;
    }else{
      this.router.navigate(['login']);
      this.islogin = false;
    }
  }
}
