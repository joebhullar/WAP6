import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getAllPostsByObservable():Observable<Post[]>
  {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getPostDetailByObservableId(id:number):Observable<Post>{
    return this.http.get<Post>("https://jsonplaceholder.typicode.com/posts/"+id);
  }
}
