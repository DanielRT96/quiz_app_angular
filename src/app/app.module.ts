import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryItemComponent } from './categories/category-item/category-item.component';
import { AnswerComponent } from './quiz/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    CategoriesComponent,
    CategoryItemComponent,
    AnswerComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
