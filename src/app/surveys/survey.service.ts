import { Subject } from 'rxjs';
import {Survey} from './survey.model'
import {Question} from './questions/question.model'

export class SurveyService {

  survey1Questions : Question[] = [
    new Question(1, 1, 'what is your fav sunscreen brand', 'a'),
    new Question(1, 2, 'how do you find follow sunscreen brand', 'c')
  ];
  surveys : Survey[] = [
    new Survey(1, 'test survey 1', 'survey sunscreen', 'survey nr 1 for testing', this.survey1Questions),
    new Survey(2, 'test survey 2', 'survey organic food', 'survey nr 2 for testing', []),
  ];

  selectedSurvey = new Subject<Survey>();

  getSurveys() {
    return this.surveys.slice();
  }

  getSurveyById(id : number ) : Survey {
    for(let i = 0; i< this.getSurveys().length; i++) {
      if (this.getSurveys()[i].id === id) {
        return this.getSurveys()[i];
      }
    }
    return null;
  }
}
