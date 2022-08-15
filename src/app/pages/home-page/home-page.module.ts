import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
  bootstrap: [HomePageComponent],
})
export class HomePageModule {}
