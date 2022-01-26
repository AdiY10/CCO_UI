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


  public httpGetPrices(filter: Filter): Observable<any>{
    const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post('http://127.0.0.1:5000/getPrices', filter, options);
  }
  public httpGetFleet(apps): Observable<any>{
    const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post('http://127.0.0.1:5000/getFleet', apps, options);
  }
  public httpGetAWSData(): Observable<any>{
    const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post('http://127.0.0.1:5000/getAWSData', options);
  }

}
