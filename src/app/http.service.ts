import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category } from './categories/category.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getCategories() {
    return this.http.get(`http://jservice.io/api/categories?count=10`).pipe(
      map((result: any[]) => {
        return result.map(r => new Category(r.id, r.title, r.clues_count));
      })
    );
  }

  public getRandom() {
    return this.http.get('http://jservice.io/api/random');
  }
}
