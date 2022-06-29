import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import {Filter} from '../dataClasses';

@Component({
  selector: 'app-azure-single-instance',
  templateUrl: './azure-single-instance.component.html',
  styleUrls: ['./azure-single-instance.component.css']
})
export class AzureSingleInstanceComponent implements OnInit {

  constructor(public requestService: RequestService) { }
  data: any[];
  ngOnInit(): void {
  }
  onApplyFilter(filter: Filter): void {
    this.requestService.httpGetAzurePrices(filter).subscribe(data => {
      this.data = data;
    });
  }

}