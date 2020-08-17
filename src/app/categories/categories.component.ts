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
  randomID: number;

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
    });
  }

  selectRandomCat() {
    const random = Math.floor(Math.random() * this.categories.length);
    this.randomID = this.categories[random].id;
    console.log(this.randomID);
  }

  // const selectRandom = () => {
  //   const radioBoxes = this.radioBoxes;
  //   const random = Math.floor(Math.random() * 10);

  //   for (i = 0; i < radioBoxes.length; i++) {
  //     radioBoxes[i].checked = false;
  //   }
  //   radioBoxes[random].checked = true;
  //   currentID = radioBoxes[random].value;
  //   categoryQuestion(currentID);
  // };
}
