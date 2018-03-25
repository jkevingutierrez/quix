import { Quiz } from '../entities/quiz';
import { QUESTIONS } from './mock-questions';

export const QUIZ: Quiz = {
  id: 1,
  name: 'Design Patterns',
  questions: QUESTIONS,
  hasBeenReviewed: false,
  description: 'Lorem ipsum dolor sit amet, ' +
    'consectetur adipisicing elit. ' +
    'Minus itaque cumque dolorem voluptatum laborum error doloribus, ' +
    'debitis nisi perspiciatis, velit accusantium, dolores voluptates molestias.'
};
