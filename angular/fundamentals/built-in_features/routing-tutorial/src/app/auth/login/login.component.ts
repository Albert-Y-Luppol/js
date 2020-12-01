import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  message: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ){
    this.setMessage();
  }

  setMessage(){
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(){
    this.message = 'Try to log in ...';

    this.authService.login().subscribe(()=>{
      this.setMessage();
      if(this.authService.isLoggedIn){

        const redirectUrl = this.authService.redirectUrl || '/admin';

        const navExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        this.router.navigate([redirectUrl], navExtras);
      }
    })
  }

  logout(){
    this.authService.logout();
    this.setMessage();
  }
}
