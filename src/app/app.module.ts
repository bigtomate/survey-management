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
import { QuestionItemComponent } from './surveys/questions/question-item/question-item.component'

@NgModule({
  declarations: [
    AppComponent,
    SurveysComponent,
    SurveyListComponent,
    SurveyItemComponent,
    SurveyDetailComponent,
    HeaderComponent,
    QuestionItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
