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
    console.log(filter);
    
    if(filter.request == 'aws'){
      this.requestService.httpGetAWSPrices(filter).subscribe(data => {
       this.data = data;
      });
    }

    if(filter.request == 'azure'){
       this.requestService.httpGetAzurePrices(filter).subscribe(data => {
      this.data = data;
    });
    }

    if(filter.request == 'hybrid'){
       this.requestService.httpGetHybridPrices(filter).subscribe(data => {
         this.data = data;
       });
    }

  }
}