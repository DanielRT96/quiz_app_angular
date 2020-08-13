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
  currentAnswer: string;
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

  filterCategory(id) {
    this.httpService.filterCategory(id);
  }
}
