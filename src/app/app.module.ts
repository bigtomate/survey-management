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
import { EditPopupComponent } from './edit-popup/edit-popup.component';
import { MatDialogModule} from '@angular/material/dialog'
import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    SurveysComponent,
    SurveyListComponent,
    SurveyItemComponent,
    SurveyDetailComponent,
    HeaderComponent,
    QuestionItemComponent,
    AnswerItemComponent,
    EditPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatDialogModule,
    NoopAnimationsModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent],
  entryComponents:[EditPopupComponent]
})
export class AppModule { }
