import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-option-div',
  templateUrl: './select-option-div.component.html',
  styleUrls: ['./select-option-div.component.css']
})
export class SelectOptionDivComponent implements OnInit {

  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}
