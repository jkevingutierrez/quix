import { Injectable } from '@angular/core';

import { Question } from '../../entities/question';

@Injectable()
export class QuestionService {

  constructor() { }

  isAnswerCorrect(question: Question): boolean {
    const optionsLength = question.options.length;

    for (let i = 0; i < optionsLength; i++) {
      const option = question.options[i];
      const hasCorrectAnswerUnmarked = (option.isAnswer === true && option.selected === false);
      const hasWrongAnswerMarked = (option.isAnswer === false && option.selected === true);

      if (hasCorrectAnswerUnmarked || hasWrongAnswerMarked) {
        return false;
      }
    }

    return true;
  }
}
