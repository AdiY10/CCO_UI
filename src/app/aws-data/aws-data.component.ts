import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-aws-data',
  templateUrl: './aws-data.component.html',
  styleUrls: ['./aws-data.component.css']
})
export class AwsDataComponent implements OnInit {
  constructor(public requestService: RequestService) { }
  loading: any = false;
  ngOnInit(): void {
    
  }
  GetData(): void {
    this.loading = true
    this.requestService.httpGetAWSData().subscribe(data => {
      this.loading = false
    });
  }
}

