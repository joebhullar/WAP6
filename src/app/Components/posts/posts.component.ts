import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/Services/post.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[PostService]
})
export class PostsComponent implements OnInit {
  posts:any;
  uname: string;
  msg: string;
  constructor(private elementRef:ElementRef, private _router:Router, private httpClient:HttpClient ,private objProductService:ProductService ,private objPostService:PostService) 
  {
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
    this.objPostService.getAllPostsByObservable().subscribe((data=>{this.posts=data;}))
  }

}
