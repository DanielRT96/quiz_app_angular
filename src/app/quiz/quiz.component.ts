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
      this.generateQuestion();
    } else {
      this.status = 'incorrect';
      console.log('better luck next time');
    }
  }
}
