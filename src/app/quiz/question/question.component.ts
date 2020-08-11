import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  currentQuestion: string = 'Question placeholder';
  isLoading = false;

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  ngOnInit(): void {}

  private fetchData() {
    this.isLoading = true;
    this.http.get('http://jservice.io/api/random').subscribe(data => {
      this.isLoading = false;
      this.currentQuestion = data[0].question;
    });
  }
}
