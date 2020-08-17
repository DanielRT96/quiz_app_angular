import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../category.model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  currentID: number;
  @Input() radioValue: boolean;

  @Output('generateQuestion') generateQuestion: EventEmitter<
    any
  > = new EventEmitter();

  @Input() category: Category;

  constructor(private data: DataService) {
    this.data.currentID.subscribe(currentID => (this.currentID = currentID));
  }

  ngOnInit(): void {}

  handleChange($event) {
    this.radioValue = !this.radioValue;
    this.data.changeSelect(this.radioValue);
    this.currentID = Number($event.target.id);
    this.data.changeID(this.currentID);
    this.generateQuestion.emit();
  }
}
