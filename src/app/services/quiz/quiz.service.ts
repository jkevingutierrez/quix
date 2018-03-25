import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

import Dexie from 'dexie';
import { DexieService } from '../dexie/dexie.service';

import { Quiz } from '../../entities/quiz';
import { QUIZ } from '../../mocks/mock-quiz';

@Injectable()
export class QuizService {
  table: Dexie.Table<Quiz, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('quiz');
  }

  initQuiz(): Observable<Quiz>  {
    return this.updateQuiz(QUIZ);
  }

  getQuiz(): Observable<Quiz> {
    return fromPromise(this.table.get(QUIZ.id));
  }

  updateQuiz(quiz: Quiz): Observable<Quiz> {
    return fromPromise(this.table.put(quiz).then(_ => quiz));
  }

}
