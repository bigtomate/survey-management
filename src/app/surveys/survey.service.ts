import { Subject } from 'rxjs';
import {Survey} from './survey.model'
import {Question} from './questions/question.model'
import {Answer} from './questions/answers/answer.model'
export class SurveyService {

  question1Answers : Answer[] = [
    new Answer(1, 1, 'nivea'),
    new Answer(1, 2, 'loreal'),
    new Answer(1, 3, 'skinceuticals'),
    new Answer(1, 4, 'shiseido'),
    new Answer(1, 5, 'la roche posay'),
  ];

    question2Answers : Answer[] = [
      new Answer(2, 1, '30'),
      new Answer(2, 2, '50'),
      new Answer(2, 3, '50'),
      new Answer(2, 4, '100')
    ];

   questionOne =  new Question(1, 1, 'What is your fav sunscreen brand', 'a', this.question1Answers);

  survey1Questions : Question[] = [
    this.questionOne,
    new Question(1, 2, 'Which SPF do you perfer', 'c', this.question2Answers)
  ];


  s2question1Answers : Answer[] = [
    new Answer(1, 1, 'organic valley'),
    new Answer(1, 2, 'pro Nature'),
    new Answer(1, 3, 'adya organics'),
    new Answer(1, 4, 'earth worm like it')
  ];

    s2question2Answers : Answer[] = [
      new Answer(2, 1, 'rarely'),
      new Answer(2, 2, 'sometimes'),
      new Answer(2, 3, 'everyday'),
    ];

   s2questionOne =  new Question(1, 1, 'What is your fav organic food brand', 'a', this.s2question1Answers);

  survey2Questions : Question[] = [
    this.s2questionOne,
    new Question(1, 2, 'How often do you eat the organic food', 'c', this.s2question2Answers)
  ];

  surveys : Survey[] = [
    new Survey(1, 'test survey 1', 'Survey sunscreen', 'survey nr 1 for testing', this.survey1Questions),
    new Survey(2, 'test survey 2', 'Survey organic food', 'survey nr 2 for testing', this.survey2Questions),
  ];

  selectedQuestion = new Subject<Question>();

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
