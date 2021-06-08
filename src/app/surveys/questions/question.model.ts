import {Answer} from './answers/answer.model'
export class Question {
  anwers: Answer[] = [];
  constructor(public surveyId: number, public id: number, public content: string, public type: string) {

  }

 
}
