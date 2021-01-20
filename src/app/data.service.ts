import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import {AdvisorData, EBSPrice, EC2Price} from './dataClasses';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {any} from 'codelyzer/util/function';
import {flatten} from '@angular/compiler';
import * as Constants from './Constants';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  uniqueRegions = Constants.REGIONS.map(region => region.value).filter((item, i, ar) => ar.indexOf(item) === i);
  constructor(public requestService: RequestService) { }

  getAdvisorData(): Observable<AdvisorData[]>{
    return this.requestService.getAdvisorData().pipe( map(data => {
      return flatten(flatten(Object.keys(data['spot_advisor']).map(region => {
        return Object.keys(data['spot_advisor'][region]).map(os => {
          return Object.keys(data['spot_advisor'][region][os]).map( type => {
            return  {
              region,
              typeMajor: type.split('.')[0],
              typeMinor: type.split('.')[1],
              os,
              onDemandSavings: data['spot_advisor'][region][os][type]['s'],
              cores: data['instance_types'][type]['cores'],
              ramGB: data['instance_types'][type]['ram_gb']
            };
            });
        });
      })
      ));
    }));
  }

  getEC2AllRegions(os: string): Observable<EC2Price[]>{
    return forkJoin(this.uniqueRegions.map(region => this.getEC2DataForRegion(region, os))).pipe(map(results => flatten(results)));
  }

  getEC2DataForRegion(region: string, os: string): Observable<EC2Price[]>{
    return this.requestService.getEc2ForRegion(region, os).pipe(map( response => response['prices'].map(price => this.parseEC2(price))));
  }

  parseEC2(data: any): EC2Price {
    const attr = data['attributes'];
    return {
      region: attr['aws:region'],
      cpu: attr['aws:ec2:vcpu'],
      ebsOnly: attr['aws:ec2:storage'] === 'EBS only',
      family: attr['aws:productFamily'],
      memory: attr['aws:ec2:memory'].split(' ')[0],
      network: attr['aws:ec2:networkPerformance'],
      os: attr['aws:ec2:operatingSystem'],
      typeMajor: attr['aws:ec2:instanceType'].split('.')[0],
      typeMinor: attr['aws:ec2:instanceType'].split('.')[1],
      storage: attr['aws:ec2:storage'],
      onDemandPrice: data['price']['USD']
    };
  }
}
