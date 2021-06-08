import { Component, OnInit } from '@angular/core';
import {Survey} from '../survey.model';
import {SurveyService} from '../survey.service';
@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  surveys : Survey[] = [];
  constructor(private surveyService : SurveyService) { }

  ngOnInit(): void {
    this.surveys = this.surveyService.getSurveys();
  }
}
