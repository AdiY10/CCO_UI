import { Component, OnInit } from '@angular/core';
import {Filter} from '../dataClasses';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-single-instance',
  templateUrl: './single-instance.component.html',
  styleUrls: ['./single-instance.component.css']
})
export class SingleInstanceComponent implements OnInit {

  constructor(public requestService: RequestService) { }
  data: any[];
  ngOnInit(): void {
  }
  onApplyFilter(filter: Filter): void {
    this.requestService.httpGetAWSPrices(filter).subscribe(data => {
      this.data = data;
    });
  }
}
