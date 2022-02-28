// ASK SAURABH WHAT TO PUT INTO HERE??  

import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ProductService } from "../Services/product.service";
import { UserService } from "../Services/user.service";

// we want to secure our url. to secure the url we are using auth.guard - when we wuse authguard we implement CanActivate which has 1 method boolean type canActivate():boolean:boolean{}


@Injectable() // Injectable Injection
export class AuthGuard implements CanActivate {
    constructor(private objProductService:ProductService, private ObjUserService:UserService, private _router:Router){
        
    }

    canActivate():boolean{
        if(this.objProductService.loggedIn()!='null'|| (this.ObjUserService.loggedIn()!='null')){
            return true;
        }
        else{
            this._router.navigate(['Login']);
            return false;
        }
    }

}