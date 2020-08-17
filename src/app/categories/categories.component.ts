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
    const random = Math.floor(Math.random() * this.categories.length);
    this.currentID = this.categories[random].id;
    this.data.changeID(this.currentID);
    this.httpService.filterCategory(this.currentID);
    console.log(this.currentID);
  }
}
