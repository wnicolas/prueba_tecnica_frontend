import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitButtonModule } from 'primeng/splitbutton';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [SplitButtonModule,CalendarModule,InputTextModule,CardModule],
})
export class PrimeNgModule {}
