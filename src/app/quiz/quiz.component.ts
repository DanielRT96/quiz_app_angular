import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  timer: number;
  selected: boolean;
  currentID: number;

  constructor(private httpService: HttpService, private data: DataService) {}

  ngOnInit(): void {
    this.generateQuestion();
    this.data.currentSelection.subscribe(
      selected => (this.selected = selected)
    );
    this.data.currentID.subscribe(currentID => (this.currentID = currentID));
  }

  generateQuestion() {
    if (this.currentID) {
      this.httpService.filterCategory(this.currentID);
    } else {
      this.httpService.getRandom();
    }
  }

  public get questionText(): string {
    return this.httpService.currentQuestion;
  }

  setTimer($event) {
    this.timer = $event.target.value * 1000;
  }
}
