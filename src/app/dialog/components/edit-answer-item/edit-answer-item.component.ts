import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/surveys/questions/answers/answer.model';

@Component({
  selector: 'app-edit-answer-item',
  templateUrl: './edit-answer-item.component.html',
  styleUrls: ['./edit-answer-item.component.css']
})
export class EditAnswerItemComponent implements OnInit {

  @Input("answers")
  answers : Answer[];
    @Input('questionType')
    questionType:string;
  constructor() { }

  ngOnInit(): void {
  }

}
