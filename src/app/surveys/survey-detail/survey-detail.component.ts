import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Survey } from '../survey.model';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.css']
})
export class SurveyDetailComponent implements OnInit {

  surveyDetail: Survey;

  constructor(private route: ActivatedRoute,
    private surveyService : SurveyService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.surveyDetail = this.surveyService.getSurveyById(id);
  }
}
