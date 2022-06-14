import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMenuComponent } from './layout-menu/layout-menu.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutNewsComponent } from './layout-news/layout-news.component';
import { LayoutTopbarComponent } from './layout-topbar/layout-topbar.component';
import { PrimeNGSharedModule } from '../prime-ng-shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const modules = [
  LayoutMenuComponent,
  LayoutFooterComponent,
  LayoutNewsComponent,
  LayoutTopbarComponent
]

@NgModule({
  declarations: [ modules ],
  imports: [
    CommonModule,
    PrimeNGSharedModule,
    RouterModule,
    FormsModule
  ],
  exports: [ modules ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutModule { }
