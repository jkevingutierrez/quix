import { Question } from './question';

export class Quiz {
  id: number;
  name: string;
  description: string;
  hasBeenReviewed: boolean;
  questions: Question[];
}
