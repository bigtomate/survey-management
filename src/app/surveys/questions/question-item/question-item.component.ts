import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SurveyService } from '../../survey.service';
import { Question } from '../question.model';
import { MatDialog } from '@angular/material/dialog'
import { EditPopupComponent } from 'src/app/edit-popup/edit-popup.component';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
 // styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {

  @Input('question') question : Question;

  constructor(private route: ActivatedRoute,
     private surveyService:SurveyService,
     private dialog : MatDialog) { }

  ngOnInit(): void {
  }



  openDialog(question : Question) {
 /*    const dialogRef = this.dialog.open(EditPopupComponent, {
      width: '250px',
      data: {question: question}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    }); */
  }
}
