import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizComponent } from './quiz.component';
import { QuizPopupModule } from '../quiz-popup/quiz-popup.module';
import { VariantButtonModule } from '../variant-button/variant-button.module';

@NgModule({
  imports: [CommonModule, QuizPopupModule, VariantButtonModule],
  declarations: [QuizComponent],
  exports: [QuizComponent],
  bootstrap: [QuizComponent],
})
export class QuizModule {}
