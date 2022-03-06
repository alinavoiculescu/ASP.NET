import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {Subscription} from "rxjs";
import {ArticlesService} from "../../../services/articles.service";
import {AddEditArticleComponent} from "../../shared/add-edit-article/add-edit-article.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {Article} from "../../../interfaces/article";
import {User} from "../../../interfaces/user";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public loggedUser: User;
  public parentMessage = 'message from parent';
  public articles: Article[] = [];
  public displayedColumns = ['id', 'title', 'articleText', 'pageID', 'view', 'edit', 'delete'];

  constructor(
    private router: Router,
    private dataService: DataService,
    private articlesService: ArticlesService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentUser.subscribe((user: User) => this.loggedUser = user);
    this.articlesService.getArticles().subscribe(
      (result: Article[]) => {
        console.log(result);
        this.articles = result;
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

  public receiveMessage(event): void {
    console.log(event);
  }

  public openModal(article?): void {
    const data = {
      article
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(AddEditArticleComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.articles = result;
      }
    });
  }

  public addNewArticle(): void {
    this.openModal();
  }

  public editArticle(article): void {
    this.openModal(article);
  }

  public deleteArticle(id): void {
    this.router.navigate(['/article', id]);
  }

  public viewArticle(id): void {
    this.router.navigate(['/view-article', id]);
  }
}
