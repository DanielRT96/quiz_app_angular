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

  // onClick($event) {
  //   this.selected = !this.selected;
  //   // this.data.changeSelect(this.selected);
  //   this.currentID = 0;
  //   if (this.selected === true) {
  //     this.currentID = Number($event.target.id);
  //     this.data.changeID(this.currentID);
  //     this.httpService.filterCategory(this.currentID);
  //   } else {
  //     this.generateQuestion.emit();
  //   }
  //   // this.currentID = Number($event.target.id);
  //   // this.data.changeID(this.currentID);
  //   // console.log(this.currentID);
  //   // this.httpService.filterCategory(this.currentID);
  // }

  // filterCategory(id) {
  //   // this.data.changeSelect(this.selected);
  //   this.httpService.filterCategory(id);
  // }

  handleChange($event) {
    this.currentID = Number($event.target.id);
    console.log(this.currentID);
    this.data.changeID(this.currentID);
  }
}
