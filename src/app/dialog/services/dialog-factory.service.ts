import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { AnswerItemComponent } from 'src/app/surveys/questions/answers/answer-item/answer-item.component';
import { Question } from 'src/app/surveys/questions/question.model';

// Components
import { DialogComponent } from '../components/dialog/dialog.component';

// Models
import { DialogData } from '../models/dialog-data.model';
import { DialogOptions } from '../models/dialog-options.model';

// Services
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class DialogFactoryService<T = undefined> {
  constructor(private dialog: MatDialog) {}

  open(
    question: Question,
    options: DialogOptions = { width: 1000, height : 1000 , disableClose: true }
  ): DialogService<T> {
    const dialogRef = this.dialog.open<DialogComponent<T>, Question>(
      DialogComponent,
      {
        ...this.fetchOptions(options),
        data: question
      }
    );

    dialogRef.afterClosed().pipe(first());

    return new DialogService(dialogRef);
  }

  private fetchOptions({
    width,
    height,
    disableClose
  }: DialogOptions): Pick<
    MatDialogConfig<DialogData<T>>,
    'width' | 'disableClose' | 'height'
  > {
    return {
      width: `${width}px`,
      height: `${height}px`,
      disableClose
    };
  }
}
