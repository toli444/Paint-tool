import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.css']
})
export class MyToolbarComponent implements OnInit {
  @Output()
  onScalePlusClick: EventEmitter<any> = new EventEmitter<any>();
  onScaleMinusClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}

  onScalePlusIconClick() {
    this.onScalePlusClick.emit();
  }

  onScaleMinusIconClick() {
    this.onScaleMinusClick.emit();
  }
}
