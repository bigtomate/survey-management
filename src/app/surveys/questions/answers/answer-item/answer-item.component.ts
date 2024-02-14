import { Component, OnInit, Input } from '@angular/core';
import { Answer } from 'src/app/surveys/questions/answers/answer.model';
import { Question } from 'src/app/surveys/questions/question.model';
@Component({
  selector: 'app-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrls: ['./answer-item.component.css']
})
export class AnswerItemComponent implements OnInit {

  @Input('answers')
  answers:Answer[];
  @Input('questionType')
  questionType:string;
  constructor() { }


  ngOnInit(): void {
  }

}
