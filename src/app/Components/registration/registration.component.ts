import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from 'src/app/Services/login-register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private objLoginService:LoginRegisterService) { }

  ngOnInit(): void {
  }

  register(temp:any){
    // console.log("this is the temp in component.ts", temp);
    return this.objLoginService.registrationService(temp).subscribe();
  }



}
