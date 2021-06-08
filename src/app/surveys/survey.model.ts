import {Question} from './questions/question.model'
export class Survey {

  constructor(public id: number, public name: string, public title:string, public description:string, public questions: Question[]) {

  }

  getQuestionById(id: number) {
    for (let i = 0; i< this.questions.length; i++) {
      if(id === this.questions[i]['id']) {
        return this.questions[i];
      }
    }
    return null;
  }
}
