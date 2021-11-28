import { Component, OnInit, Input } from '@angular/core';
import { Answer } from 'src/app/surveys/questions/answers/answer.model'
@Component({
  selector: 'app-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrls: ['./answer-item.component.css']
})
export class AnswerItemComponent implements OnInit {

  @Input('answers')
  answers:Answer[];
  constructor() { }


  ngOnInit(): void {
  }

}
