import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {ArticlesService} from "../../../services/articles.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-edit-article',
  templateUrl: './add-edit-article.component.html',
  styleUrls: ['./add-edit-article.component.scss']
})
export class AddEditArticleComponent implements OnInit {

  public articleForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    title: new FormControl(''),
    articleText: new FormControl(''),
    pageID: new FormControl(''),
  });

  public mytitle;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public articlesService: ArticlesService,
    public dialogRef: MatDialogRef<AddEditArticleComponent>,
  ) {
    console.log(this.data);
    if (data.article) {
      this.mytitle = 'Edit Article';
      this.articleForm.patchValue(this.data.article);
    } else {
      this.mytitle = 'Add Article';
    }
  }

  //getters
  get id(): AbstractControl | null {
    return this.articleForm.get('id');
  }

  get title(): AbstractControl | null {
    return this.articleForm.get('title');
  }

  get articleText(): AbstractControl | null {
    return this.articleForm.get('articleText');
  }

  get pageID(): AbstractControl | null {
    return this.articleForm.get('pageID');
  }

  ngOnInit(): void {
  }

  public addArticle(): void {
    this.articlesService.addArticle(this.articleForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public editArticle(): void {
    this.articlesService.editArticle(this.articleForm.value).subscribe(
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
