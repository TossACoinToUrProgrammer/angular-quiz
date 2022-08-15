import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  catchError,
  forkJoin,
  map,
  mergeMap,
  of,
  Subscription,
  throwError,
} from 'rxjs';
import { IWord } from '../../models/word';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent implements OnInit, OnDestroy {
  score = 0;
  wrongScore = 0;
  isGameOver = false;
  isPopupOpen = false;
  words: IWord[] = [];
  loading = false;
  _subscriptions: Subscription[] = [];

  constructor(private wordsService: WordsService) {
    this.nextLevelHandler = this.nextLevelHandler.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
    this.correctAnswerHanlder = this.correctAnswerHanlder.bind(this);
    this.wrongAnswerHandler = this.wrongAnswerHandler.bind(this);
  }

  ngOnInit(): void {
    this.loading = true;
    this.getQuizInitialProps(4);
  }

  startNewGame() {
    this.isGameOver = false;
    this.score = 0;
    this.wrongScore = 0;
    this.words = [];
    this.loading = true;
    this.getQuizInitialProps(4);
  }

  nextLevelHandler() {
    this.loading = true;
    this.words = [];
    this.getQuizInitialProps(4);
  }

  correctAnswerHanlder() {
    this.score = this.score + 1;
  }

  wrongAnswerHandler() {
    this.wrongScore = this.wrongScore + 1;
    if (this.wrongScore === 3) {
      this.isGameOver = true;
      this.isPopupOpen = true;
    }
  }

  private getQuizInitialProps(count: number) {
    const subscription = this.wordsService
      .getRandomWords(count)
      .pipe(
        map((fetchedWords) => [...new Set(fetchedWords)]),
        mergeMap((fetchedWords) => {
          const definitions = fetchedWords.map((word) =>
            this.wordsService.getDefinition(word).pipe(
              map((definition) => ({ word, definition })),
              catchError(({ error, message }) => {
                if (error.title === 'No Definitions Found') {
                  return of(undefined);
                }
                return throwError(() => message);
              })
            )
          );

          return forkJoin(definitions);
        }),
        map((results) => results.filter((e) => !!e) as IWord[])
      )
      .subscribe((results) => {
        this.words = [...this.words, ...results];
        if (results.length < count) {
          this.getQuizInitialProps(count - results.length);
        } else {
          this.loading = false;
        }
      });
    this._subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
