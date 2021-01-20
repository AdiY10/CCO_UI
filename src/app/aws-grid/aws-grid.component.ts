import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-aws-grid',
  templateUrl: './aws-grid.component.html',
  styleUrls: ['./aws-grid.component.css']
})
export class AwsGridComponent implements OnInit {

  title = 'my-app';
  region: string;
  typeMajor: string;
  typeMinor: string;
  os: string;
  interruptionFrequency?: string;
  onDemandSavings: number;
  cores: number;
  ramGB: number;

  columnDefs = [
    { field: 'region',
      filter: 'agTextColumnFilter',
      sortable: true},
    { field: 'typeMajor',
      sortable: true,
      filter: 'agTextColumnFilter'},
    { field: 'typeMinor',
      filter: 'agTextColumnFilter',
      sortable: true},
    { field: 'os',
      filter: 'agTextColumnFilter',
      sortable: true},
    { field: 'onDemandSavings',
      filter: 'agNumberColumnFilter',
      sortable: true},
    { field: 'cores',
      filter: 'agNumberColumnFilter',
      sortable: true},
    { field: 'ramGB',
      filter: 'agNumberColumnFilter',
      sortable: true},
  ];

  rowData = [];
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAdvisorData().subscribe( data => {
      this.rowData = data;
    });
  }
}
