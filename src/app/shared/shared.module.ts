import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BannerComponent } from './components/banner';
import { SearchComponent } from './components/search';

const components = [BannerComponent, SearchComponent];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
