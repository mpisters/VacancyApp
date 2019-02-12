import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationPageComponent} from './application-page/application-page.component';
import {FaqComponent} from './faq/faq.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ApplicationFormComponent} from './application-form/application-form.component';

const appRoutes: Routes = [];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
