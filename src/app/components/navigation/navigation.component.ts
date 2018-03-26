import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Quiz } from '../../entities/quiz';
import { QuizService } from '../../services/quiz/quiz.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() quiz: Quiz;

  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit() {
  }

  reloadQuiz() {
    if (this.router.url === '/') {
      this.router.navigateByUrl('/dummy', { skipLocationChange: true });
      setTimeout(_ => this.goTo('/'));
    } else {
      this.quizService.initQuiz().subscribe(quiz => {
        this.goTo('/');
      });
    }
  }

  submitQuiz() {
    this.quiz.hasBeenReviewed = true;
    this.quizService.updateQuiz(this.quiz)
     .subscribe(_ => { this.goTo('/score'); });
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }

  isInPage(url: string) {
    return this.router.url === url;
  }

  isInReviewPage() {
    return this.isInPage('/review');
  }

  isInScorePage() {
    return this.isInPage('/score');
  }
}
