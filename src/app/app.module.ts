import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionComponent } from './components/question/question.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, RoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
