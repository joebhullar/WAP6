import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';
import { IProduct } from '../Interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product= [
    {"productId":1, "imageUrl":"./assets/Desktop.jpg", "productCode":"P-1001", "productName":"Desktop", "price":20000,"starRating":3.5},
    {"productId":2,"imageUrl":"./assets/Ear phones.jpg", "productCode":"P-1002", "productName":"EarPhones", "price":5000, "starRating":4},
    {"productId":3,"imageUrl":"./assets/Laptop.png", "productCode":"P-1003", "productName":"Laptop", "price":50000, "starRating":5},
    {"productId":4,"imageUrl":"./assets/Mobile.jpg", "productCode":"P-1004", "productName":"Mobile", "price":25000, "starRating":4.9},
    {"productId":5,"imageUrl":"./assets/Smart Watch.jpg", "productCode":"P-1005", "productName":"Smart Watch", "price":12000, "starRating":4},
    {"productId":6,"imageUrl":"./assets/Tab.jpg", "productCode":"P-1006", "productName":"Tab", "price":35000, "starRating":4.5}
  ];

  // prooducts2 = C:\AngularTraining\pract\WAP6\src\assets\Product.json";

  constructor(private http:HttpClient) { }
  getAllProductsByObservable():Observable<IProduct[]>{
    return this.http.get<IProduct[]>("./assets/Product.json");
  }

  getAllProductByObservableId(productId:number) 
  {
    console.log("This is product." , this.product[productId]);
    // return null;
       return this.product[productId];

    }

    loggedIn():string{
      return localStorage.getItem('uname');
    }

}
