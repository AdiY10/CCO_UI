import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Filter} from './dataClasses';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }


  public httpGetAWSPrices(filter: Filter): Observable<any>{
    const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post('http://127.0.0.1:5000/getAWSPrices', filter, options);
  }

  public httpGetAzurePrices(filter: Filter): Observable<any>{
    const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post('http://127.0.0.1:5000/getAzurePrices', filter, options);
  }

  public httpGetHybridPrices(filter: Filter): Observable<any>{
    const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post('http://127.0.0.1:5000/getHybridPrices', filter, options);
  }

  public httpGetAWSFleet(apps): Observable<any>{
    const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post('http://127.0.0.1:5000/getAWSFleet', apps, options);
  }

  public httpGetAzureFleet(apps): Observable<any>{
    const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post('http://127.0.0.1:5000/getAzureFleet', apps, options);
  }

  public httpHybridCloudFleet(apps): Observable<any>{
    const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post('http://127.0.0.1:5000/getHybridCloudFleet', apps, options);
  }

  public httpGetAWSData(): Observable<any>{
    const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post('http://127.0.0.1:5000/getAWSData', options);
  }

  public httpApplyResults(rowNumber): Observable<any>{
    const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post('http://127.0.0.1:5000/ApplyResults', rowNumber, options);
  }

  
}