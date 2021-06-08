import { Subject } from 'rxjs';
import {Survey} from './survey.model'

export class SurveyService {

  surveys : Survey[] = [
    new Survey(1, 'test survey 1', 'survey sunscreen', 'survey nr 1 for testing'),
    new Survey(2, 'test survey 2', 'survey organic food', 'survey nr 2 for testing'),
  ];

  selectedSurvey = new Subject<Survey>();

  getSurveys() {
    return this.surveys.slice();
  }

  getSurveyById(id : number ) {
    return 
  }
}
