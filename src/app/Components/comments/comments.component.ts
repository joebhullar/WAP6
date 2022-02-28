import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from 'src/app/Models/Comment';
import { CommentService } from 'src/app/Services/comment.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers:[CommentService]
})
export class CommentsComponent implements OnInit {
  comments:Comment[];
  uname: string;
  msg: string;
  constructor(private elementRef:ElementRef, private _router:Router, private httpClient:HttpClient ,private objProductService:ProductService ,private objCommentService:CommentService) {
    this.objCommentService.getAllCommentsByObservable().subscribe((data=>{this.comments=data;}));

    this.uname = localStorage.getItem('uname');

    if (this.uname != null) {
      this.msg = this.uname;
    }
    else {
      this.msg = 'Something went wrong, Please try again';
      this._router.navigate(['Login']);
    }
    
   }

  ngOnInit(): void {
    //this.usr= sessionStorage.getItem('username');
  
    this.uname = localStorage.getItem('uname');
    if (this.uname != 'null')
      this.msg = 'Hello ' + this.uname;

    else {
      this.msg = 'Landed on this page using technique...';
      this._router.navigate(['Login']);
    }
  }

}
