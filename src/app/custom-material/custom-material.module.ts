import { NgModule } from '@angular/core';
import { MatSelectModule, MatCheckboxModule } from '@angular/material';
import { SelectCheckAllComponent } from './select-check-all/select-check-all.component';
import { CommonModule } from '@angular/common';
import { SelectSelectedOptionComponent } from './select-selected-option/select-selected-option.component';
import { SelectOptionDivComponent } from './select-option-div/select-option-div.component';

@NgModule({
  imports: [
    MatSelectModule, MatCheckboxModule, CommonModule
  ],
  exports: [
    MatSelectModule, MatCheckboxModule, SelectCheckAllComponent, SelectSelectedOptionComponent,
    SelectOptionDivComponent
  ],
  declarations: [SelectCheckAllComponent, SelectSelectedOptionComponent, SelectOptionDivComponent]
})
export class CustomMaterialModule {
}