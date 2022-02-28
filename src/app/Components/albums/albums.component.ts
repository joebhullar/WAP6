import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from 'src/app/Services/album.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers:[AlbumService]
})
export class AlbumsComponent implements OnInit {
  uname: string;
  msg: string;
  albums:any;
  constructor(private elementRef:ElementRef, private _router:Router, private httpClient:HttpClient ,private objProductService:ProductService ,private objAlbumService:AlbumService) 
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

  ngOnInit(): void {
    this.objAlbumService.getAllAlbumsByObservable().subscribe((data=>{this.albums=data;}))
  }

}
