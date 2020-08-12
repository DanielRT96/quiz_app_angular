import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  selected: boolean = false;
  currentID: number;

  @Output('generateQuestion') generateQuestion: EventEmitter<
    any
  > = new EventEmitter();

  @Input() category: Category;

  constructor() {}

  ngOnInit(): void {}

  onClick($event) {
    this.selected = !this.selected;
    if (this.selected === true) {
      this.currentID = $event.target.id;
      console.log($event.target.id);
    } else {
      console.log('test');
      this.generateQuestion.emit();
    }
  }
}
