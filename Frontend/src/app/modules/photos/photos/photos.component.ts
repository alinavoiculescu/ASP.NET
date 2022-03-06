import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {Subscription} from "rxjs";
import {PhotosService} from "../../../services/photos.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddEditPhotoComponent} from "../../shared/add-edit-photo/add-edit-photo.component";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  public subscription: Subscription;
  public loggedUser;
  public photos = [];
  public displayedColumns = ['id', 'title', 'edit', 'delete'];

  constructor(
    private router: Router,
    private dataService: DataService,
    private photosService: PhotosService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
    this.photosService.getPhotos().subscribe(
      (result) => {
        console.log(result);
        this.photos = result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public logout(): void {
    localStorage.setItem('Role', 'BasicUser');
    this.router.navigate(['/login']);
  }

  public openModal(photo?): void {
    const data = {
      photo
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(AddEditPhotoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.photos = result;
      }
    });
  }

  public addNewPhoto(): void {
    this.openModal();
  }

  public editPhoto(photo): void {
    this.openModal(photo);
  }

  public deletePhoto(id): void {
    this.router.navigate(['/photo', id]);
  }
}
