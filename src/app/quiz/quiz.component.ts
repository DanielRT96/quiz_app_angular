import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DataService } from '../data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  timer: number;
  selected: boolean;
  currentID: number;

  constructor(
    private httpService: HttpService,
    private data: DataService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.generateQuestion();
    this.data.currentSelected.subscribe(selected => (this.selected = selected));
    this.data.currentID.subscribe(currentID => (this.currentID = currentID));
  }

  generateQuestion() {
    this.spinner.show();
    if (this.selected) {
      this.httpService.filterCategory(this.currentID);
      this.spinner.hide();
    } else {
      this.httpService.getRandom();
      this.spinner.hide();
    }
  }

  public get questionText(): string {
    return this.httpService.currentQuestion;
  }

  setTimer($event) {
    this.timer = $event.target.value * 1000;
  }
}
