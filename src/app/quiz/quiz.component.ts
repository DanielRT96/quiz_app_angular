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
  inputValue: string;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getRandom().subscribe(data => {
      this.currentQuestion = data[0].question;
      this.currentAnswer = data[0].answer;
      console.log(this.currentAnswer);
    });
  }

  onKeyUp($event) {
    this.inputValue = $event.target.value;
    console.log(this.inputValue);
  }
}
