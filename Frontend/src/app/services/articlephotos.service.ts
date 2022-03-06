import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticlephotosService {

  public url = 'https://localhost:44302/api/articlephoto';

  constructor(
      public http: HttpClient,
  ) { }

  public getArticlephotos(): Observable<any> {
    return this.http.get('https://localhost:44302/api/articlephoto');
  }

  public addArticlephoto(articlephoto): Observable<any> {
    return this.http.post('https://localhost:44302/api/articlephoto', articlephoto);
  }

  public editArticlephoto(articlephoto): Observable<any> {
    return this.http.put('https://localhost:44302/api/articlephoto', articlephoto);
  }
}
