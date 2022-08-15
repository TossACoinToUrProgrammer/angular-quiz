import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizPageComponent } from './quiz-page.component';
import { QuizModule } from '../../components/quiz/quiz.module';
import { QuizPopupModule } from '../../components/quiz-popup/quiz-popup.module';
import { WordsService } from '../../services/words.service';

@NgModule({
  imports: [CommonModule, QuizModule, QuizPopupModule],
  declarations: [QuizPageComponent],
  exports: [CommonModule],
  bootstrap: [CommonModule],
  providers: [WordsService],
})
export class QuizPageModule {}
