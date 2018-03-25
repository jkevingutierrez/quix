import { Component, OnInit } from '@angular/core';

import { Question } from '../../entities/question';
import { Quiz } from '../../entities/quiz';
import { QuizService } from '../../services/quiz/quiz.service';
import { QuestionService } from '../../services/question/question.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  quiz: Quiz;

  constructor(private quizService: QuizService, private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz() {
    this.quizService.getQuiz()
      .subscribe(quiz => this.quiz = quiz);
  }

  isAnswerCorrect(question: Question) {
    return this.questionService.isAnswerCorrect(question);
  }
}
