import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {PhotosService} from "../../../services/photos.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ArticlesService} from "../../../services/articles.service";

@Component({
  selector: 'app-add-edit-photo',
  templateUrl: './add-edit-photo.component.html',
  styleUrls: ['./add-edit-photo.component.scss']
})
export class AddEditPhotoComponent implements OnInit {

  public photoForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    title: new FormControl(''),
  });

  public mytitle;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public photosService: PhotosService,
    public dialogRef: MatDialogRef<AddEditPhotoComponent>,
  ) {
    console.log(this.data);
    if (data.photo) {
      this.mytitle = 'Edit Photo';
      this.photoForm.patchValue(this.data.photo);
    } else {
      this.mytitle = 'Add Photo';
    }
  }

  //getters
  get id(): AbstractControl | null {
    return this.photoForm.get('id');
  }

  get title(): AbstractControl | null {
    return this.photoForm.get('title');
  }

  ngOnInit(): void {
  }

  public addPhoto(): void {
    this.photosService.addPhoto(this.photoForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public editPhoto(): void {
    this.photosService.editPhoto(this.photoForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
