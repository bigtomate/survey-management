import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveysComponent } from './surveys/surveys.component';
import { SurveyListComponent } from './surveys/survey-list/survey-list.component';
import { SurveyItemComponent } from './surveys/survey-list/survey-item/survey-item.component';
import { SurveyDetailComponent } from './surveys/survey-detail/survey-detail.component';
import { HeaderComponent } from './header/header.component';
import { SurveyService } from './surveys/survey.service';
import { QuestionItemComponent } from './surveys/questions/question-item/question-item.component';
import { AnswerItemComponent } from './surveys/questions/answers/answer-item/answer-item.component';
import { MatDialogModule} from '@angular/material/dialog'
import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from './dialog/dialog.module'
import { DialogComponent } from './dialog/components/dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    SurveysComponent,
    SurveyListComponent,
    SurveyItemComponent,
    SurveyDetailComponent,
    HeaderComponent,
    QuestionItemComponent,
    AnswerItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
   DialogModule.forRoot(),

    BrowserAnimationsModule,

  ],
  providers: [SurveyService],
  bootstrap: [AppComponent],

})
export class AppModule { }
