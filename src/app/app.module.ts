import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { QuizPageModule } from './pages/quiz-page/quiz-page.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    QuizPageModule,
    NavigationModule,
    LoginPageModule,
    HomePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
