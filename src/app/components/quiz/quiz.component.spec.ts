import { FormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { QuizComponent } from './quiz.component';
import { QuestionComponent } from '../question/question.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { QuizService } from '../../services/quiz/quiz.service';
import { DexieService } from '../../services/dexie/dexie.service';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MatCheckboxModule, RouterTestingModule ],
      declarations: [ QuizComponent, QuestionComponent, NavigationComponent ],
      providers: [ QuizService, DexieService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
