import { Component, Inject } from '@angular/core';
import { Question } from '../surveys/questions/question.model';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SurveyDetailComponent } from '../surveys/survey-detail/survey-detail.component';
import {QuestionItemComponent} from '../surveys/questions/question-item/question-item.component'
@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent  {


  constructor(
    public dialogRef: MatDialogRef<QuestionItemComponent>,
    @Inject(MAT_DIALOG_DATA) public question: Question) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
