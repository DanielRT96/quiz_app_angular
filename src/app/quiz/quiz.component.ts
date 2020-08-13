import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  // currentQuestion: string;
  // currentAnswer: string;
  timer: number;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.generateQuestion();
  }

  generateQuestion() {
    this.httpService.getRandom();
    // .subscribe(data => {
    //   this.currentQuestion = data[0].question;
    //   this.currentAnswer = data[0].answer;
    // });
    // this.httpService.changeQuestion(this.currentQuestion);
  }

  public get questionText(): string {
    return this.httpService.currentQuestion;
  }

  setTimer($event) {
    this.timer = $event.target.value * 1000;
  }
}
