import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SurveyService } from '../../survey.service';
import { Question } from '../question.model';
import { MatDialog } from '@angular/material/dialog'
import {DialogService} from '../../../dialog/services/dialog.service'
import {DialogFactoryService} from '../../../dialog/services/dialog-factory.service'
@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
 // styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {

  @Input('question') question : Question;

  dialog: DialogService;

  constructor(private route: ActivatedRoute,
     private surveyService:SurveyService,

     private dialogFactoryService: DialogFactoryService) { }

  ngOnInit(): void {

  }

  dispatchDialog(question : Question) {
    this.openDialog(question);
  }

  closeDialog() {
    this.dialog.close();
  }
  private openDialog(question: Question): void {
    this.dialog = this.dialogFactoryService.open(question);
  }
}
