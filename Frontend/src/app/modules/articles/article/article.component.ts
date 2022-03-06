import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ArticlesService} from "../../../services/articles.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public subscription: Subscription;
  public id;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.deleteArticle();
      }
    });
  }

  public deleteArticle(): void {
    this.articlesService.deleteArticle(this.id).subscribe(
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
