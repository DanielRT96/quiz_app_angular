import { Component, OnInit, Output } from '@angular/core';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  ngOnInit(): void {}

  private fetchData() {
    this.http
      .get('http://jservice.io/api/categories?count=10')
      .subscribe((response: any) => {
        const data = response.map(el => new Category(el.title, el.clues_count));
        this.categories.push(...data);
        console.log(data);
      });
  }
}
