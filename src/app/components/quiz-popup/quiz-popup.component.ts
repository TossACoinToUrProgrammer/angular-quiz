import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-quiz-popup',
  templateUrl: './quiz-popup.component.html',
  styleUrls: ['./quiz-popup.component.scss'],
})
export class QuizPopupComponent implements OnChanges, OnDestroy {
  @Input() isVisible: boolean;
  @Output() close: EventEmitter<null> = new EventEmitter();

  closeHandler() {
    this.close.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (window.innerWidth <= 576) {
      if (changes['isVisible'].currentValue) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }

  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }
}
