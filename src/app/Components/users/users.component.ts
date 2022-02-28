import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  uname: string = '';
  msg: string = '';

  constructor(private elementRef: ElementRef, private _router: Router, private httpClient: HttpClient, private objUserService:UserService) {
    this.objUserService.getAllUsersByObservable().subscribe((data=>{this.users=data;}));

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
