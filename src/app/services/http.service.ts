import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
  host: string = 'https://api.themoviedb.org/3/genre/28/movies?api_key=f2c299854f7ac8e69ef49715399c1bbe&language=en-US&include_adult=false&sort_by=created_at.asc';

  constructor(private http: Http) { }

  httpGet(): Observable<any> {
    return this.http
               .get(this.host)
               .map(res => res.json())
               .catch(this.handleError);
  }

  private handleError(error:any) {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }

}
