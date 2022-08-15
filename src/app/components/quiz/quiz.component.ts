import { Component, Input, OnInit } from '@angular/core';
import { IWord } from 'src/app/models/word';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  @Input() words: IWord[];
  @Input() isGameOver: boolean;
  @Input() onCorrectAnswer: () => void;
  @Input() onWrongAnswer: () => void;
  @Input() onStartNewGame: () => void;
  @Input() onNextLevel: () => void;

  isSubmitted = false;
  selectedWordIndex: number | null = null;
  correctWordIndex: number;

  constructor() {}

  ngOnInit(): void {
    this.correctWordIndex = this.getRandomNumBetween(0, this.words.length - 1);
  }

  selectHandler(id: number) {
    this.selectedWordIndex = id;
  }

  nextLevelHandler() {
    this.onNextLevel();
  }

  submitHandler() {
    this.isSubmitted = true;
    if (this.selectedWordIndex === this.correctWordIndex) {
      this.onCorrectAnswer();
    } else {
      this.onWrongAnswer();
    }
  }

  private getRandomNumBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
