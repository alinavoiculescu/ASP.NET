import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../interfaces/article";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  public url = 'https://localhost:44302/api/article';

  constructor(
    public http: HttpClient,
  ) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('https://localhost:44302/api/article');
  }

  public viewArticle(id): Observable<Article> {
    return this.http.get<Article>(`https://localhost:44302/api/article/byId/${id}`);
  }

  public addArticle(article: Article): Observable<Article[]> {
    return this.http.post<Article[]>('https://localhost:44302/api/article', article);
  }

  public editArticle(article: Article): Observable<Article[]> {
    return this.http.put<Article[]>('https://localhost:44302/api/article', article);
  }

  public deleteArticle(id): Observable<any> {
    return this.http.delete(`https://localhost:44302/api/article/${id}`);
  }
}
