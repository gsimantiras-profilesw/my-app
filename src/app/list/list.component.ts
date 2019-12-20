import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() title: string = "Entity";

  public dataFiltered = []
  public data = [
    'george',
    'nick',
    'stas',
    'kuriakos',
    'george'
  ]
  constructor() { }

  ngOnInit() { 

    //set filtered data after getting data
    this.dataFiltered = this.setFilteredData(this.data)
  }

  // output input val
  getVal(inputVal) {
    this.dataFiltered = this.setFilteredData(this.filterByVal(this.data, inputVal));
  }

  // filter data
  filterByVal(data: any[], inputVal: string): any[] {
    return data.filter(val => val.indexOf(inputVal) > -1);
  }

  // return new array
  setFilteredData(data: any[]): any[] {
    return [...data];
  }
}
