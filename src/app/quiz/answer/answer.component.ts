import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() currentAnswer: string;
  @Input() timer: number;
  inputValue: string;
  status = 'neutral';

  @ViewChild('answerBox') el: ElementRef;

  @Output('generateQuestion') generateQuestion: EventEmitter<
    any
  > = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  enterAnswer(value) {
    this.inputValue = value;
    setTimeout(() => {
      if (this.inputValue === this.currentAnswer) {
        this.status = 'correct';
        setTimeout(() => {
          this.generateQuestion.emit();
          this.resetQuestion();
        }, 2000);
      } else {
        this.status = 'incorrect';
        setTimeout(() => {
          this.resetQuestion();
        }, 2000);
      }
    }, this.timer);
  }

  setTimer($event) {
    this.timer = $event.target.value * 1000;
  }

  resetQuestion() {
    this.status = 'neutral';
    this.el.nativeElement.value = '';
  }
}
