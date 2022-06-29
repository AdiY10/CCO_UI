import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RequestService} from '../request.service';
import * as Constants from '../Constants';

@Component({
  selector: 'app-fleet-search',
  templateUrl: './fleet-search.component.html',
  styleUrls: ['./fleet-search.component.css']
})
export class FleetSearchComponent implements OnInit {

  data: any;
  region = Constants.AWSREGIONS;
  os = Constants.AWSOS;

  payment = {
        name:"Pricing Method",
        options:["Spot", "On-Demand"] 
  };
  hideelements = {};

  constructor( public requestService: RequestService) { }

  ngOnInit(): void {
  }

  sendFleetRequest(params: any) {
    this.requestService.httpGetAWSFleet(params).subscribe((result) => {
      this.data = result;
    });
  }
}