import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { ScoreComponent } from './components/score/score.component';
import { ReviewComponent } from './components/review/review.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { QuizService } from './services/quiz/quiz.service';
import { DummyComponent } from './components/dummy/dummy.component';
import { QuestionService } from './services/question/question.service';
import { DexieService } from './services/dexie/dexie.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ScoreComponent,
    ReviewComponent,
    QuizComponent,
    NavigationComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [QuizService, QuestionService, DexieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
