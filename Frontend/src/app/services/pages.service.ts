import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  public url = 'https://localhost:44302/api/page';

  constructor(
    public http: HttpClient,
  ) { }

  public getPages(): Observable<any> {
    return this.http.get('https://localhost:44302/api/page');
  }

  public addPage(page): Observable<any> {
    return this.http.post('https://localhost:44302/api/page', page);
  }

  public editPage(page): Observable<any> {
    return this.http.put('https://localhost:44302/api/page', page);
  }

  public deletePage(id): Observable<any> {
    return this.http.delete(`https://localhost:44302/api/page/${id}`);
  }
}
