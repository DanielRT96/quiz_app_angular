import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from './category.model';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  @Output('generateQuestion') generateQuestion: EventEmitter<
    any
  > = new EventEmitter();

  getQuestion() {
    this.generateQuestion.emit();
  }
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(data);
    });
  }
}
