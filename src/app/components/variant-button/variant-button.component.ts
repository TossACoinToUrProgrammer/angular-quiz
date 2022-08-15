import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-variant-button',
  templateUrl: './variant-button.component.html',
  styleUrls: ['./variant-button.component.scss']
})
export class VariantButtonComponent {
 @Input() isSelected: boolean;
 @Input() isCorrect: boolean;
 @Input() isResultVisible: boolean;
}
