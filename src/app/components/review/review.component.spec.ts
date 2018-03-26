import { FormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { ReviewComponent } from './review.component';
import { QuestionComponent } from '../question/question.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { QuestionService } from '../../services/question/question.service';
import { QuizService } from '../../services/quiz/quiz.service';
import { DexieService } from '../../services/dexie/dexie.service';

describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MatCheckboxModule, RouterTestingModule ],
      declarations: [ ReviewComponent, QuestionComponent, NavigationComponent ],
      providers: [ QuizService, DexieService, QuestionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
