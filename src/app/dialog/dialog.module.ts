import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';

// Components
import { ButtonComponent } from './components/button/button.component';
import { DialogComponent } from './components/dialog/dialog.component';
import {AnswerItemComponent } from 'src/app/surveys/questions/answers/answer-item/answer-item.component'
import {DialogFasade} from './components/dialog/dialog.fasade';
import { EditAnswerItemComponent } from './components/edit-answer-item/edit-answer-item.component'
@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    MatButtonModule,
    MatDialogModule
  ],
  exports: [DialogComponent, ButtonComponent],
  declarations: [DialogComponent, ButtonComponent, EditAnswerItemComponent],
  entryComponents: [DialogComponent]
})
export class DialogModule {
  static forRoot() : ModuleWithProviders<DialogModule> {
    return {
      ngModule: DialogModule,
      providers: [DialogFasade]
    }
  }
}
