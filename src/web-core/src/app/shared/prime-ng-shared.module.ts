import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TagModule } from 'primeng/tag';
import { CheckboxModule } from 'primeng/checkbox';

const module = [
  AutoCompleteModule,
  BadgeModule,
  ButtonModule,
  InputTextModule,
  TagModule,
  TooltipModule,
  CheckboxModule,
];

@NgModule({
  declarations:[ ],
  imports: [ module ],
  exports: [ module ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrimeNGSharedModule { }