import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Survey } from '../../survey.model';

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.css']
})
export class SurveyItemComponent implements OnInit {
  @Input('s') survey : Survey;
  @Output('selectedSurvey') selectedSurvey = new EventEmitter<Survey>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem(survey : Survey) {
   this.selectedSurvey.emit();
  }

}
