import {Question} from './questions/question.model'
export class Survey {
  
  constructor(public id: number, public name: string, public title:string, public description:string, public questions: Question[]) {

  }
}
