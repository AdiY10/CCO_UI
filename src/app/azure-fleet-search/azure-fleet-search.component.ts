import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import * as Constants from '../Constants';

@Component({
  selector: 'app-azure-fleet-search',
  templateUrl: './azure-fleet-search.component.html',
  styleUrls: ['./azure-fleet-search.component.css']
})
export class AzureFleetSearchComponent implements OnInit {

   data: any;
   region = Constants.AzureREGIONS;
   os = Constants.AzureOS;
   
  payment = {
        name:"Pricing Method",
        options:["Spot", "Pay as You Go"] 
  };

  hideelements = {};
  
  constructor( public requestService: RequestService) { }

  ngOnInit(): void {
  }

  sendFleetRequest(params: any) {
    this.requestService.httpGetAzureFleet(params).subscribe((result) => {
      this.data = result;
    });
  }

}