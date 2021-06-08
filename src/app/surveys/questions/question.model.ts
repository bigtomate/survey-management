import {Answer} from './answers/answer.model'
export class Question {

  constructor(public surveyId: number, public id: number, public content: string, public type: string, public answers : Answer[]) {

  }



}
