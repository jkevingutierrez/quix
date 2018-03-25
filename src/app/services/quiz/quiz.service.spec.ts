import { TestBed, inject } from '@angular/core/testing';

import { QuizService } from './quiz.service';
import { DexieService } from '../dexie/dexie.service';

describe('QuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizService, DexieService]
    });
  });

  it('should be created', inject([QuizService], (service: QuizService) => {
    expect(service).toBeTruthy();
  }));
});
