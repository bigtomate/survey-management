import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyDetailComponent } from './surveys/survey-detail/survey-detail.component';
import { SurveysComponent } from './surveys/surveys.component';

const routes: Routes = [
  { path: '', redirectTo: '/surveys', pathMatch: 'full' },
  { path:'surveys', component : SurveysComponent},
  { path:'surveys/:id', component : SurveyDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
