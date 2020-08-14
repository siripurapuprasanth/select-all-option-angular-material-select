import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-select-check-all',
  templateUrl: "./select-check-all.component.html",
  styleUrls: ['./select-check-all.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectCheckAllComponent {
  @Input() model: FormControl;
  @Input() values = [];
  @Input() text = 'Select All'; 
  @Output() selectAll = new EventEmitter();

  isChecked(): boolean {
    return this.model.value && this.values.length
      && this.model.value.length === this.values.length;
  }

  isIndeterminate(): boolean {
    return this.model.value && this.values.length && this.model.value.length
      && this.model.value.length < this.values.length;
  }

  toggleSelection(change: MatCheckboxChange): void {
    if (change.checked) {
      this.model.setValue(this.values);
            this.selectAll.emit({value: this.values});

    } else {
      this.model.setValue([]);
            this.selectAll.emit({value: []});

    }
  }
}
