import {NgModule} from '@angular/core';
import {AlertComponent} from './alert/alert.component';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {PlaceholderDirective} from './placeholder/placeholder.directive';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AlertComponent,
    DropdownDirective,
    LoadingSpinnerComponent,
    PlaceholderDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AlertComponent,
    CommonModule,
    DropdownDirective,
    LoadingSpinnerComponent,
    PlaceholderDirective,
  ],
  entryComponents: [
    AlertComponent,
  ]
})
export class SharedModule {

}
