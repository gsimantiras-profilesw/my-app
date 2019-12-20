import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ma-field',
  templateUrl: './ma-field.component.html',
  styleUrls: ['./ma-field.component.scss']
})
export class MaFieldComponent implements OnInit {
  @Output() onChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  valueChanged($event) {
    const val = $event.target.value;
    this.onChange.emit(val);
  }
}
