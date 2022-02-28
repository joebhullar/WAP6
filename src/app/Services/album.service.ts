import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../Models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http:HttpClient) { }
  
  getAllAlbumsByObservable():Observable<Album[]>
  {
    return this.http.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
  }

  getAlbumsDetailByObservableId(id:number):Observable<Album>{
    return this.http.get<Album>("https://jsonplaceholder.typicode.com/albums/"+id);
  }
}
