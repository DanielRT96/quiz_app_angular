import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category } from './categories/category.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  currentAnswer: string;
  currentQuestion: string;

  constructor(private http: HttpClient) {}

  public getCategories() {
    return this.http.get(`http://jservice.io/api/categories?count=10`).pipe(
      map((result: any[]) => {
        return result.map(r => new Category(r.id, r.title, r.clues_count));
      })
    );
  }

  public getRandom() {
    return this.http.get('http://jservice.io/api/random').subscribe(data => {
      this.currentQuestion = data[0].question;
      this.currentAnswer = data[0].answer;
      console.log(this.currentAnswer);
      console.log(this.currentQuestion);
    });
  }

  public filterCategory(id) {
    return this.http
      .get(`http://jservice.io/api/clues?category=${id}`)
      .subscribe(data => {
        const dataLength = Object.keys(data).length;
        const random = Math.floor(Math.random() * dataLength);
        this.currentAnswer = data[random].answer;
        this.currentQuestion = data[random].question;
        console.log(this.currentQuestion);
        console.log(this.currentAnswer);
      });
  }
}
