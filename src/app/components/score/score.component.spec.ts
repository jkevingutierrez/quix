import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { ScoreComponent } from './score.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { QuizService } from '../../services/quiz/quiz.service';
import { QuestionService } from '../../services/question/question.service';
import { DexieService } from '../../services/dexie/dexie.service';

describe('ScoreComponent', () => {
  let component: ScoreComponent;
  let fixture: ComponentFixture<ScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ScoreComponent, NavigationComponent ],
      providers: [ QuizService, QuestionService, DexieService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
