import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Interfaces/IProduct';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductService]
})
export class ProductsComponent implements OnInit {
  products:IProduct[];
  imageWidth:number=200;
  imageMargin:number=100;
  //login auth
  uname: string = '';
  msg: string = '';

  constructor(private elementRef:ElementRef, private _router:Router, private httpClient:HttpClient ,private objProductService:ProductService) {
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
