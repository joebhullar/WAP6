import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers:[UserService]
})
export class UserDetailComponent implements OnInit {
  user:any;
  constructor(private activatedRoute:ActivatedRoute, private objUserService:UserService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.objUserService.getUserDetailByObervableId(id).subscribe((data=>{this.user=data;}))
  }

}
