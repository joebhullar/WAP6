import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers:[PostService]
})
export class PostDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private objPostService:PostService) { }
  post:any;
  ngOnInit(): void {
    let id= this.activatedRoute.snapshot.params['id'];
    this.objPostService.getPostDetailByObservableId(id).subscribe((data=>{this.post=data;}))
  }

}
