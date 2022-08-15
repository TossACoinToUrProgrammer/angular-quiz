import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPopupComponent } from './quiz-popup.component';

@NgModule({
  declarations: [QuizPopupComponent],
  imports: [CommonModule],
  exports: [QuizPopupComponent],
  bootstrap: [QuizPopupComponent],
})
export class QuizPopupModule {}
