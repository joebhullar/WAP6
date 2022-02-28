import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../Models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  getAllCommentsByObservable():Observable<Comment[]>{
    return this.http.get<Comment[]>("https://jsonplaceholder.typicode.com/comments");
  }

  getCommentDetailByObservableId(id:number):Observable<Comment[]>{
    return this.http.get<Comment[]>("https://jsonplaceholder.typicode.com/comments/"+id);
  }
}
