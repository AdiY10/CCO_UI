import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-fleet-search',
  templateUrl: './fleet-search.component.html',
  styleUrls: ['./fleet-search.component.css']
})
export class FleetSearchComponent implements OnInit {

  data: any;
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
  constructor( public requestService: RequestService) { }

  ngOnInit(): void {
  }

  sendFleetRequest(params: any) {
    this.requestService.httpGetFleet(params).subscribe((result) => {
      this.data = result;
    });
  }
}
