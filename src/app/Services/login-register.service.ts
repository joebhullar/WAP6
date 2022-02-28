import { HttpClient, HttpHeaders } from '@angular/common/http';
import { templateJitUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private http:HttpClient) { }

  loginService(temp:any):Observable<Login[]>
  {
    const headers= new HttpHeaders().set('content-type', 'application/json');
    const body= {userName:temp.form.value.userName, password:temp.form.value.password, age:temp.form.value.age};
    console.log("body is ", body);
    return this.http.post<Login[]>("http://localhost:54723/api/Users/LoginUser",body, {headers});
  }

  
  registrationService(temp:any):Observable<Login[]>
  {
    const headers= new HttpHeaders().set('content-type', 'application/json');
    const body= {userName:temp.form.value.userName, password:temp.form.value.password, age:temp.form.value.age};
    console.log("body is ", body);
    return this.http.post<Login[]>("http://localhost:54723/api/Users/RegisterUser",body, {headers});
  }
    
}
