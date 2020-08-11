import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQuestion: string;
  currentAnswer: string;
  inputValue: string;
  status: string = 'neutral';

  @ViewChild('answerBox') el: ElementRef;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.generateQuestion();
  }

  generateQuestion() {
    this.httpService.getRandom().subscribe(data => {
      this.currentQuestion = data[0].question;
      this.currentAnswer = data[0].answer;
      console.log(this.currentAnswer);
    });
  }
  onKeyUp(value) {
    this.inputValue = value;
    console.log(this.inputValue);
    if (this.inputValue === this.currentAnswer) {
      this.status = 'correct';
      setTimeout(() => {
        this.generateQuestion();
        this.resetQuestion();
      }, 2000);
    } else {
      this.status = 'incorrect';
      setTimeout(() => {
        this.resetQuestion();
      }, 2000);
    }
  }

  resetQuestion() {
    this.status = 'neutral';
    this.el.nativeElement.value = '';
  }
}
