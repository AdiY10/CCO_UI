import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as Constants from '../Constants';
import {Filter} from '../dataClasses';


@Component({
  selector: 'app-grid-filter',
  templateUrl: './grid-filter.component.html',
  styleUrls: ['./grid-filter.component.css']
})
export class GridFilterComponent implements OnInit {
  @Output()
  applyFilter: EventEmitter<Filter> = new EventEmitter<Filter>();
  regions = Constants.REGIONS;
  OSs = Constants.OS;
  typePurpose = Constants.TYPE_PURPOSE;
  interruptionBehavior = Constants.INTERRUPTION_BEHAVIOR;
  selectedRegion: string;
  selectedOs: string;
  memory: string;
  vCPUs: string;
  type: string;
  throughput: string;
  iops: string;
  size: string;
  network: string;
  behavior: string;

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    const filter = {
      selectedRegion: this.selectedRegion,
      selectedOs: this.selectedOs,
      memory: this.memory,
      vCPUs: this.vCPUs,
      type: this.type,
      throughput: this.throughput,
      iops: this.iops,
      size: this.size,
      network: this.network,
      behavior: this.behavior,
    };
    this.applyFilter.emit(filter);
  }
}
