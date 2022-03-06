import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ArticlephotosService} from "../../../services/articlephotos.service";

@Component({
  selector: 'app-add-edit-articlephoto',
  templateUrl: './add-edit-articlephoto.component.html',
  styleUrls: ['./add-edit-articlephoto.component.scss']
})
export class AddEditArticlephotoComponent implements OnInit {
  public articlephotoForm: FormGroup = new FormGroup({
    articleID: new FormControl('0'),
    photoID: new FormControl('0'),
    description: new FormControl(''),
  });

  public mytitle;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public articlephotosService: ArticlephotosService,
    public dialogRef: MatDialogRef<AddEditArticlephotoComponent>,
  ) {
    console.log(this.data);
    if (data.articlephoto) {
      this.mytitle = 'Edit Article Photo';
      this.articlephotoForm.patchValue(this.data.articlephoto);
    } else {
      this.mytitle = 'Add Article Photo';
    }
  }

  //getters
  get articleID(): AbstractControl | null {
    return this.articlephotoForm.get('articleID');
  }

  get photoID(): AbstractControl | null {
    return this.articlephotoForm.get('photoID');
  }

  get description(): AbstractControl | null {
    return this.articlephotoForm.get('description');
  }

  ngOnInit(): void {
  }

  public addArticlephoto(): void {
    this.articlephotosService.addArticlephoto(this.articlephotoForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public editArticlephoto(): void {
    this.articlephotosService.editArticlephoto(this.articlephotoForm.value).subscribe(
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
