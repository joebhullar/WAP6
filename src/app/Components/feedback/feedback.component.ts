import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/Models/Feedback';
import { FeedbackService } from 'src/app/Services/feedback.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers:[FeedbackService]
})
export class FeedbackComponent implements OnInit {
  feedbacks:Feedback[];
  products: import("c:/AngularTraining/pract/WAP6/src/app/Interfaces/IProduct").IProduct[];
  uname: string;
  msg: string;
  constructor( private elementRef:ElementRef, private _router:Router, private httpClient:HttpClient ,private objProductService:ProductService ,private _feedbackservice:FeedbackService) {
    this._feedbackservice.getFeedback().subscribe((data=>{
      this.feedbacks = data;
    }));
    this.objProductService.getAllProductsByObservable().subscribe((data=>{this.products=data;}));
    
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
      this.msg = 'Hello ' + this.uname

    else {
      this.msg = 'Landed on this page using technique...';
      this._router.navigate(['Login']);
    }
  }

}