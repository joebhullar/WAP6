import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle="Welcome";
  usr:string='';
  uname: string = '';
  msg: string = '';
  banner: any = [];
  todayDate = new Date();

  constructor(private elementRef: ElementRef, private _router: Router, private httpClient: HttpClient)  {
    this.uname = localStorage.getItem('uname');

    if (this.uname != null) {
      this.msg = this.uname;
    }
    else {
      this.msg = 'Something went wrong, Please try again';
      this._router.navigate(['Login']);
    }
  }
  
    onLogout()
    {
      localStorage.clear();
      this._router.navigate(['Login']);
    }
  ngOnInit(): void {
          //this.usr= sessionStorage.getItem('username');
  
          this.uname = localStorage.getItem('uname');
          if (this.uname != 'null')
            this.msg = 'Hello ' + this.uname
      
          else {
            this.msg = 'Landed on this page using technique...';
            this._router.navigate(['Login']);
          }
  }

}
