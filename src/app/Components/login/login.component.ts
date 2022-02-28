import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login';
import { LoginRegisterService } from 'src/app/Services/login-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {

  userName: string;
  pwd: string;
  msg: string;

  constructor(private _router: Router) { }

  credentials(): void {
   if (this.userName == 'Eleazer' && this.pwd == 'Patil' ||
      this.userName == 'saurabh' && this.pwd == '12345' ||
      this.userName == 'padma' && this.pwd == 'karri' ||
      this.userName == 'Harish' && this.pwd == 'Harish')
      {

      localStorage.setItem('uname', this.userName);
      this._router.navigate(['./Home']);
    }
    else {
      this.msg = 'Incorrect username or password';
    }

  }
}
