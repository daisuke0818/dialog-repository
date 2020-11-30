import { Component, OnInit } from '@angular/core';
import { DataList } from '../data-interface/data.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

  constructor() {}

  dataList: DataList[] = [
    { id: 1, name: 'taro' },
    { id: 2, name: 'jiro' },
    { id: 3, name: 'saburo' },
  ];

  ngOnInit(): void {
  }
}
