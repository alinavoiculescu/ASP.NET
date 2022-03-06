import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ArticlesService} from "../../../services/articles.service";
import {Article} from "../../../interfaces/article";

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent implements OnInit {

  public subscription: Subscription;
  public id;
  public article: Article = {
    title: 'Default title',
    articleText: 'Default content',
    pageID: 'Default page number',
    id: 'Default ID',
  };

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.viewArticle();
      }
    });
  }

  public viewArticle(): void {
    this.articlesService.viewArticle(this.id).subscribe(
      (result: Article) => {
        console.log(result);
        this.article = result;
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
