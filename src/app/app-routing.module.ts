import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizComponent } from './components/quiz/quiz.component';
import { ScoreComponent } from './components/score/score.component';
import { ReviewComponent } from './components/review/review.component';
import { DummyComponent } from './components/dummy/dummy.component';

const routes: Routes = [
  { path: '', component: QuizComponent, pathMatch: 'full' },
  { path: 'score', component: ScoreComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'dummy', component: DummyComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
