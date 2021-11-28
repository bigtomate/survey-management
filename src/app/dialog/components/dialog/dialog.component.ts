import { Component, Inject, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuestionItemComponent } from 'src/app/surveys/questions/question-item/question-item.component';
import { AnswerItemComponent } from 'src/app/surveys/questions/answers/answer-item/answer-item.component';
import { Question } from 'src/app/surveys/questions/question.model';
import { Answer } from 'src/app/surveys/questions/answers/answer.model'
/**
 * A common component rendered as a Material dialog
 */
@Component({
  selector: 'app-dialog',
  styleUrls: ['dialog.component.scss'],
  templateUrl: "dialog.component.html"
})
export class DialogComponent<T> {
  /**
   * Initializes the component.
   *
   * @param dialogRef - A reference to the dialog opened.
   */
  constructor(
    public dialogRef: MatDialogRef<DialogComponent<T>>,
    @Inject(MAT_DIALOG_DATA)
    public data: Question
  ) {}

onClose() {
this.dialogRef.close();
}

}
