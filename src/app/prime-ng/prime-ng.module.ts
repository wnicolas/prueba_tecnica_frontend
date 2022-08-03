import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitButtonModule } from 'primeng/splitbutton';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [SplitButtonModule,CalendarModule],
})
export class PrimeNgModule {}
