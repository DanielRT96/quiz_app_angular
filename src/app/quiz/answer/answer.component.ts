import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() currentAnswer: string;
  inputValue: string;

  constructor() {}

  ngOnInit(): void {}

  onKeyUp($event) {
    this.inputValue = $event.target.value;
    console.log(this.inputValue);

    if (this.inputValue === this.currentAnswer) {
      console.log('good');
    }
  }
}
