import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {PhotosService} from "../../../services/photos.service";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  public subscription: Subscription;
  public id;

  constructor(
    private route: ActivatedRoute,
    private photosService: PhotosService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.deletePhoto();
      }
    });
  }

  public deletePhoto(): void {
    this.photosService.deletePhoto(this.id).subscribe(
      (result) => {
        console.log(result);
        this.id = result;
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
