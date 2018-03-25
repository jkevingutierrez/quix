import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../../entities/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Input() index: number;
  @Input() disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
