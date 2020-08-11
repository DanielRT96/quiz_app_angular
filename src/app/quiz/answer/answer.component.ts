import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  inputValue: string;

  constructor() {}

  ngOnInit(): void {}

  // onKeyUp($event) {
  //   this.inputValue = $event.target.value;
  //   if (this.inputValue === this.currentAnswer) {
  //     this.generateQuestion();
  //     this.el.nativeElement.value = '';
  //   } else {
  //     console.log('better luck next time');
  //   }
  // }
}
