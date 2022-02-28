import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/Models/Comment';
import { CommentService } from 'src/app/Services/comment.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private objCommentService:CommentService) { }
  comment:Comment;
  ngOnInit(): void {
    let id=this.activatedRoute.snapshot.params['id'];
    console.log("this is the id: ", id);
    this.objCommentService.getCommentDetailByObservableId(id).subscribe((data=>{
      //this.comment= data;
      console.log("This is the DATA DATA DATA  ", data);
    }))
    console.log("HELLO WAPWAPWAP ", this.comment);//ASK SAURABH HOW TO VIEW THIS?
  }

}
