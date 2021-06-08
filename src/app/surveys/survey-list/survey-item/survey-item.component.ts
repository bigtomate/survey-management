import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Survey } from '../../survey.model';
import { SurveyService } from '../../survey.service';

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.css']
})
export class SurveyItemComponent implements OnInit {
  @Input('s') survey : Survey;

  constructor(private surveyService : SurveyService ) { }

  ngOnInit(): void {

  }
}
