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
   example = [
    {
      offers: 'offers',
      price: 5,
      region: 'asdf',
      children: [
        {
          components: 'level 2 - 333',
          typeName: 'level 2 - 444',
          total_price: 123,
          cpu: 12,
          memory: 123,
          network: 12,
          onDemandPrice: 123,
          discount: 12,
          children: [
            {
              app: 1,
              cpu: 2,
              memory: 4,
            },
            {
              app: 1,
              cpu: 2,
              memory: 4,
            },
            {
              app: 3,
              cpu: 2,
              memory: 4,
            },
            {
              app: 4,
              cpu: 2,
              memory: 4,
            },
            {
              app: 1,
              cpu: 23,
              memory: 44,
            },
            {
              app: 2,
              cpu: 22,
              memory: 4,
            },
          ],
        },
      ],
    },
    {
      offers: 'offers2',
      price: 53,
      region: 'asdfqwe',
      children: [
        {
          components: 'lewq 2 - 333',
          typeName: 'level 2 -wqe44',
          total_price: 1233,
          cpu: 125,
          memory: 1253,
          network: 126,
          onDemandPrice: 1323,
          discount: 152,
          children: [
            {
              app: 4,
              cpu: 22,
              memory: 4,
            },
            {
              app: 1,
              cpu: 32,
              memory: 4,
            },
            {
              app: 2,
              cpu: 2,
              memory: 4,
            },
            {
              app: 4,
              cpu: 2,
              memory: 4,
            },
            {
              app: 1,
              cpu: 23,
              memory: 44,
            },
            {
              app: 2,
              cpu: 22,
              memory: 4,
            },
          ],
        },
      ],
    },
  ];
  
  payment = {
        name:"payment",
        options:["Spot", "Pay as You Go"] 
  };

  constructor( public requestService: RequestService) { }

  ngOnInit(): void {
  }

  sendFleetRequest(params: any) {
    this.requestService.httpGetAzureFleet(params).subscribe((result) => {
      this.data = result;
    });
  }

}