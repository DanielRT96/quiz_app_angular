import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQuestion: string;
  currentAnswer: string;
  timer: number;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.generateQuestion();
  }

  public generateQuestion() {
    this.httpService.getRandom().subscribe(data => {
      this.currentQuestion = data[0].question;
      this.currentAnswer = data[0].answer;
      console.log(this.currentAnswer);
    });
  }

  setTimer($event) {
    this.timer = $event.target.value * 1000;
  }
}
