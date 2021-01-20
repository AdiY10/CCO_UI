import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getAdvisorData(): Observable<any> {
    return this.httpGet('https://spot-bid-advisor.s3.amazonaws.com/spot-advisor-data.json');
  }

  getCurrentSpotData(): Observable<any> {
    return this.httpGet('https://website.spot.ec2.aws.a2z.com/spot.js');
  }

  private httpGet(url: string): Observable<any>{
    return this.http.get(url);
  }

  getEc2ForRegion(region: string, os: string): Observable<any>{
    return this.httpGet('https://calculator.aws/pricing/1.0/ec2/region/' + region + '/ondemand/' + os + '/index.json');
  }

  getEbsForRegion(region: string): Observable<any> {
    return this.httpGet('https://calculator.aws/pricing/1.0/ec2/region/' + region + '/ebs/index.json');
  }
}
