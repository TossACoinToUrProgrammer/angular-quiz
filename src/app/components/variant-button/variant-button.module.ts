import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantButtonComponent } from './variant-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VariantButtonComponent],
  exports: [VariantButtonComponent],
  bootstrap: [VariantButtonComponent],
})
export class VariantButtonModule {}
