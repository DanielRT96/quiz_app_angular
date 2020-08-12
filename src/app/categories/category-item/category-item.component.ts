import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../category.model';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  selected: boolean = false;
  currentID: number;
  correctAnswer: string;
  currentQuestion: string;

  @Output('generateQuestion') generateQuestion: EventEmitter<
    any
  > = new EventEmitter();

  @Input() category: Category;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  onClick($event) {
    this.selected = !this.selected;
    if (this.selected === true) {
      this.currentID = $event.target.id;
      console.log($event.target.id);
      this.filterCategory(this.currentID);
    } else {
      this.generateQuestion.emit();
    }
  }

  public filterCategory(id) {
    this.httpService.filterCategory(id).subscribe(data => {
      console.log(data);
      const dataLength = Object.keys(data).length;
      const random = Math.floor(Math.random() * dataLength);
      // console.log(random);
      // categoryID = x.id;
      // categoryName = x.title;
      this.correctAnswer = data[random].answer;
      this.currentQuestion = data[random].question;
      console.log(this.currentQuestion);
      console.log(this.correctAnswer); // use two-way binding ngModel
    });
  }
}
