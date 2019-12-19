import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() title: string = "Entity";
  @Output() valChanged: EventEmitter<any>;


  constructor() { }

  ngOnInit() {
  }


  valueChanged($event) {
    this.valChanged.emit('e');
  }

}
