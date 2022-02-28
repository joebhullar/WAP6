import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {  }

  getAllUsersByObservable():Observable<User[]>{
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }

  getUserDetailByObervableId(id:number):Observable<User[]>{
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users/"+id);
  }
  loggedIn():string{
    return localStorage.getItem('uname');
  }

}

