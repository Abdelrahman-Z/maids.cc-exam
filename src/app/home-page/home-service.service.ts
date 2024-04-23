import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { baseUrl } from '../constans';

@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  private dataCache: { [page: number]: any } = {};

  constructor(private http: HttpClient) {}

  getData(page: number): Observable<any> {
    if (this.dataCache[page]) {
      return of(this.dataCache[page]);
    } else {
      const url = `${baseUrl}?page=${page}`;
      return this.http.get(url).pipe(
        tap((data) => {
          this.dataCache[page] = data;
        })
      );
    }
  }
}
