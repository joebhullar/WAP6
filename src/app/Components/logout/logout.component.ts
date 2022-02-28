import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  userName: string = '';
  msg: string = '';
  constructor(private router: Router) {
    this.userName = localStorage.getItem('uname');
    if (this.userName != 'null') {
      this.msg = this.userName;
      localStorage.clear();
      setTimeout(() => {
        this.router.navigate(['./Login']);
    }, 5000);
    }
    else {
      this.msg = 'Landed on this page using technique...';
    }
  }
}