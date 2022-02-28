import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/Models/Album';
import { AlbumService } from 'src/app/Services/album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  //How come we do not need to have ALbumService defined here???
})
export class AlbumDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private objAlbumService:AlbumService) { }
  album:Album;
  ngOnInit(): void {
    let id=this.activatedRoute.snapshot.params['id'];
    this.objAlbumService.getAlbumsDetailByObservableId(id).subscribe((data=>{this.album=data;}))
  }

}
