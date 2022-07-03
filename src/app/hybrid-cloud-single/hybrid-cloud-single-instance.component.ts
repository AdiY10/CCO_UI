import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import {Filter} from '../dataClasses';

@Component({
  selector: 'app-hybrid-cloud-single-instance',
  templateUrl: './hybrid-cloud-single-instance.component.html',
  styleUrls: ['./hybrid-cloud-single-instance.component.css']
})
export class HybridSingleInstanceComponent implements OnInit {

  constructor(public requestService: RequestService) { }
  data: any[];
  ngOnInit(): void {
  }
  onApplyFilter(filter: Filter): void {
    this.requestService.httpGetHybridPrices(filter).subscribe(data => {
      this.data = data;
    });
  }

}