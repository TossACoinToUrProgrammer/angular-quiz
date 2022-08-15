import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { VariantButtonComponent } from './components/variant-button/variant-button.component';
import { QuizPopupComponent } from './components/quiz-popup/quiz-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizPageComponent,
    HomePageComponent,
    NavigationComponent,
    QuizComponent,
    VariantButtonComponent,
    QuizPopupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
