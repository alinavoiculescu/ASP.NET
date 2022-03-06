import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {PagesService} from "../../../services/pages.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ArticlesService} from "../../../services/articles.service";

@Component({
  selector: 'app-add-edit-page',
  templateUrl: './add-edit-page.component.html',
  styleUrls: ['./add-edit-page.component.scss']
})
export class AddEditPageComponent implements OnInit {
  docDate = 'Jan 20, 2022, 21:43:11 UTC';
  public pageForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    publicationDate: new FormControl(''),
    shortDescription: new FormControl(''),
  });

  public mytitle;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public pagesService: PagesService,
    public dialogRef: MatDialogRef<AddEditPageComponent>,
  ) {
    console.log(this.data);
    if (data.page) {
      this.mytitle = 'Edit Page';
      this.pageForm.patchValue(this.data.page);
    } else {
      this.mytitle = 'Add Page';
    }
  }

  //getters
  get id(): AbstractControl | null {
    return this.pageForm.get('id');
  }

  get publicationDate(): AbstractControl | null {
    return this.pageForm.get('publicationDate');
  }

  get shortDescription(): AbstractControl | null {
    return this.pageForm.get('shortDescription');
  }

  ngOnInit(): void {
  }

  public addPage(): void {
    this.pagesService.addPage(this.pageForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public editPage(): void {
    this.pagesService.editPage(this.pageForm.value).subscribe(
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
