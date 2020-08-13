import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../category.model';
import { HttpService } from '../../http.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  selected: boolean;
  currentID: number;
  // currentAnswer: string;
  // currentQuestion: string;

  @Output('generateQuestion') generateQuestion: EventEmitter<
    any
  > = new EventEmitter();

  @Input() category: Category;

  constructor(private httpService: HttpService, private data: DataService) {
    this.data.currentSelection.subscribe(
      selected => (this.selected = selected)
    );
    this.data.currentID.subscribe(currentID => (this.currentID = currentID));
  }

  ngOnInit(): void {}

  onClick($event) {
    this.selected = !this.selected;
    if (this.selected === true) {
      this.currentID = Number($event.target.id);
      console.log(this.currentID);
      this.filterCategory(this.currentID);
    }
    // } else {
    //   this.generateQuestion.emit();
    // }
  }

  filterCategory(id) {
    this.httpService.filterCategory(id);
    this.data.changeSelect(this.selected);
    this.data.changeID(this.currentID);
  }
}
