import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-selected-option',
  templateUrl: './select-selected-option.component.html',
  styleUrls: ['./select-selected-option.component.css']
})
export class SelectSelectedOptionComponent implements OnInit {

  @Input() list: Array<any> = [];
  @Output() selectedOptionChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelection(event, val){
    this.selectedOptionChange.emit({value: val});

  }

}
