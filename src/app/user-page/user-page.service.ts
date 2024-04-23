import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { baseUrl } from '../constans';
@Injectable({
  providedIn: 'root',
})
export class UserPageService {
  private dataCache: { [page: number]: any } = {};

  constructor(private http: HttpClient) {}
  getUserById(userId: number): Observable<any> {
    if (this.dataCache[userId]) {
      return of(this.dataCache[userId]);
    } else {
      const url = `${baseUrl}/${userId}`;
      return this.http.get(url).pipe(
        tap((data) => {
          this.dataCache[userId] = data;
        })
      );
    }
  }
}
