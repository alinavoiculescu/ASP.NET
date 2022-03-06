import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  public url = 'https://localhost:44302/api/photo';

  constructor(
    public http: HttpClient,
  ) { }

  public getPhotos(): Observable<any> {
    return this.http.get('https://localhost:44302/api/photo');
  }

  public addPhoto(photo): Observable<any> {
    return this.http.post('https://localhost:44302/api/photo', photo);
  }

  public editPhoto(photo): Observable<any> {
    return this.http.put('https://localhost:44302/api/photo', photo);
  }

  public deletePhoto(id): Observable<any> {
    return this.http.delete(`https://localhost:44302/api/photo/${id}`);
  }
}
