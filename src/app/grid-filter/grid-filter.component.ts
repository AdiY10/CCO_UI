import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as Constants from '../Constants';
import {Filter} from '../dataClasses';


@Component({
  selector: 'app-grid-filter',
  templateUrl: './grid-filter.component.html',
  styleUrls: ['./grid-filter.component.css']
})
export class GridFilterComponent implements OnInit {
  @Input()
  minimize: boolean;
  @Output()
  applyFilter: EventEmitter<Filter> = new EventEmitter<Filter>();
  applyFilter2: EventEmitter<Filter> = new EventEmitter<Filter>();
  //regions = Constants.AWSREGIONS;
  AWSregions = Constants.AWSREGIONS;
  Azureregions = Constants.AzureREGIONS;
  OSs = Constants.AWSOS;
  payment = Constants.paymentOptions;
  typePurpose = Constants.TYPE_PURPOSE;
  interruptionBehavior = Constants.INTERRUPTION_BEHAVIOR;
  interruptionFrequency = Constants.INTERRUPTION_FREQUENCY;
  networkPerformance = Constants.NETWORK_PERFORMANCE;
  storageTypes = Constants.STORAGE_TYPES;
  selectedRegion: string;
  selectedOs: string;
  selectedpayment: string;
  memory: string;
  vCPUs: string;
  type: string;
  throughput: string;
  iops: string;
  size: string;
  network: number;
  behavior: string;
  frequency: string;
  storage: string;
  burstable: boolean;
  specificationStorage: any;
  name: string;
  affinity:any;
  antiaffinity:any;


  constructor() { }

  ngOnInit(): void {
  }

  submit(manualStorage: boolean, request): void {
    const filter = {
      selectedRegion: this.selectedRegion,
      selectedOs: this.selectedOs,
      memory: this.memory,
      vCPUs: this.vCPUs,
      type: this.type,
      throughput: manualStorage ?  null : this.throughput,
      iops: manualStorage ?  null : this.iops,
      size: this.size,
      network: this.network,
      behavior: this.behavior,
      frequency: this.frequency,
      storageType: manualStorage ? this.storage : null,
      burstable: this.network == null || this.network <= 0 || this.burstable,
      name: this.name,
      affinity:this.affinity,
      antiaffinity:this.antiaffinity,
      payment: this.selectedpayment,
      request: request
    };
    this.applyFilter.emit(filter);
  }
}