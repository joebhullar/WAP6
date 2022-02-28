import { Component, ElementRef, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/Services/feedback.service';
import { Feedback } from 'src/app/Models/Feedback';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css'],
  providers:[FeedbackService]
})
export class CreateFeedbackComponent implements OnInit {
  createFeedback:Feedback[];
  products: import("c:/AngularTraining/pract/WAP6/src/app/Interfaces/IProduct").IProduct[];
  uname: string;
  msg: string;
  constructor(private elementRef:ElementRef, private httpClient:HttpClient ,private objProductService:ProductService ,private _feedbackservice:FeedbackService, private _router:Router) { 
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

  SaveFeedback(temp:any) {
    console.log("feeback temp value:", temp);
    this._feedbackservice.SaveFeedback(temp).subscribe();
    return 1;
 }
 ViewFeedback(){
  this._router.navigate(['Feedback'])
  }
}