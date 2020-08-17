import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from './category.model';
import { HttpService } from '../http.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  currentID: number;
  radioValue: boolean;

  @Output('generateQuestion') generateQuestion: EventEmitter<
    any
  > = new EventEmitter();

  constructor(private httpService: HttpService, private data: DataService) {
    this.data.currentID.subscribe(currentID => (this.currentID = currentID));
  }

  ngOnInit(): void {
    this.httpService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  getQuestion() {
    this.generateQuestion.emit();
  }

  selectRandomCat() {
    this.radioValue = true;
    const random = Math.floor(Math.random() * this.categories.length);
    this.currentID = this.categories[random].id;
    this.data.changeID(this.currentID);
    this.data.changeSelect(this.radioValue);
    this.getQuestion();
    console.log(this.currentID);
  }
}
