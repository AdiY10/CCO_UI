import { Component } from '@angular/core';
import {Filter} from './dataClasses';
import {RequestService} from './request.service';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awsTest';
  data: any[];

  constructor(public requestService: RequestService) {
  }

  onApplyFilter(filter: Filter): void {
    this.requestService.httpGetPrices(filter).subscribe(data => {
      this.data = data;
    });
  }
}
