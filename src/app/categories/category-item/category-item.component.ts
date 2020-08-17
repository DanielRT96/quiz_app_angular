import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  ElementRef
} from '@angular/core';

import { Category } from '../category.model';
import { HttpService } from '../../http.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  currentID: number;
  radioValue: boolean;

  @Output('generateQuestion') generateQuestion: EventEmitter<
    any
  > = new EventEmitter();

  @Input() category: Category;
  @Input() randomID: number;

  constructor(private httpService: HttpService, private data: DataService) {}

  ngOnInit(): void {}

  handleChange($event) {
    this.radioValue = !this.radioValue;
    this.data.changeSelect(this.radioValue);
    // console.log(this.radioValue); // testing - remove later
    // console.log($event.target.value);
    if (this.radioValue) {
      this.currentID = Number($event.target.id);
      // console.log(this.currentID); // testing - remove later
      this.data.changeID(this.currentID);
      this.httpService.filterCategory(this.currentID);
    } else {
      this.generateQuestion.emit();
    }
  }
}
