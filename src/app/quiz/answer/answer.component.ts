import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';

import { HttpService } from '../../http.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  // @Input() currentAnswer: string;
  @Input() timer: number;
  inputValue: string;
  status = 'empty';

  @ViewChild('answerBox') el: ElementRef;

  @Output('generateQuestion') generateQuestion: EventEmitter<
    any
  > = new EventEmitter();

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  enterAnswer(value) {
    this.inputValue = value.replace(/ /g, '').toLowerCase();
    this.status = 'neutral';
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

  resetQuestion() {
    this.status = 'empty';
    this.el.nativeElement.value = '';
  }

  public get currentAnswer(): string {
    return this.httpService.currentAnswer;
  }
}
