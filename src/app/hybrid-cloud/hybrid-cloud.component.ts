import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import * as Constants from '../Constants';
@Component({
  selector: 'app-hybrid-cloud',
  templateUrl: './hybrid-cloud.component.html',
  styleUrls: ['./hybrid-cloud.component.css']
})
export class HybridCloudComponent implements OnInit {

  data: any;

  os = Constants.HybridOS;
  
  payment = {
        name:"Pricing Option",
        options:["Spot", "On-Demand"]  
  };

  hideelements = {region: true};

  constructor( public requestService: RequestService) { }

  ngOnInit(): void {
  }

  sendHybridRequest(params: any) {
    this.requestService.httpHybridCloudFleet(params).subscribe((result) => {
      this.data = result;
    });
  }


}
