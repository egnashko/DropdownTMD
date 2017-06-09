import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  httpGet(host): Observable<any> {
    return this.http
               .get(host)
               .map(res => res.json())
               .catch(this.handleError);
  }

  private handleError(error:any) {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }

}
