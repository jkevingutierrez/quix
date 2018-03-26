import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/mergeMap';

import { Quiz } from '../../entities/quiz';
import { QuizService } from '../../services/quiz/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quiz: Quiz;
  currentQuestionNumber: number;

  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit() {
    this.currentQuestionNumber = 0;
    this.initQuiz();
  }

  initQuiz() {
    if (this.router.url === '/quiz') {
      this.quizService.initQuiz()
        .mergeMap(_ => this.quizService.getQuiz())
        .subscribe(quiz => this.quiz = quiz);
    } else {
      this.getQuiz();
    }
  }

  getQuiz() {
    return this.quizService.getQuiz()
      .subscribe(quiz => this.quiz = quiz);
  }

  isInFirstQuestion() {
    return this.currentQuestionNumber === 0;
  }

  isInLastQuestion() {
    return this.currentQuestionNumber === this.quiz.questions.length - 1;
  }

  goToQuestion(questionNumber: number) {
    this.currentQuestionNumber = questionNumber;
  }

  goToFirstQuestion() {
    this.goToQuestion(0);
  }

  goToPrevQuestion() {
    const prevQuestionNumber = this.currentQuestionNumber - 1;
    this.goToQuestion(prevQuestionNumber);
  }
  goToNextQuestion() {
    const nextQuestionNumber = this.currentQuestionNumber + 1;
    this.goToQuestion(nextQuestionNumber);
  }
  goToLastQuestion() {
    const lastQuestionNumber = this.quiz.questions.length - 1;
    this.goToQuestion(lastQuestionNumber);
  }

}
