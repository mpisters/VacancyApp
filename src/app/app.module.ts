import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {ApplicationFormComponent} from './application-form/application-form.component';
import {ApplicationPageComponent} from './application-page/application-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FaqComponent} from './faq/faq.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ApplicationFormComponent,
    ApplicationPageComponent,
    FaqComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
