import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Option } from './Option';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  options:Option[] = [];
  form: FormGroup;
  selectedOptions: Option[];
  constructor() { 
    // Create sample projects
    for(let i=0; i<100; i++) {
      this.options.push(new Option("Project "+ i));
    }
   
    // Setup form
    this.form = new FormGroup({
      selectControl: new FormControl(this.options)      
    });
  }

  onSelectionChange(event){
    this.selectedOptions = event.value;
  }

  onSelOptionsChnage(event) {
    console.log(event);
    this.selectedOptions = this.selectedOptions.filter(option => event.value !== option);
    this.form.controls.selectControl.patchValue(this.selectedOptions);
  }
  onSelectAll(event){
    this.selectedOptions =event.value;
    this.form.controls.selectControl.patchValue(this.selectedOptions);
  }
}