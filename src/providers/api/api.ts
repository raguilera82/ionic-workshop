import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators/catchError';
import { timeout } from 'rxjs/operators/timeout';

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get('https://api.github.com/users').pipe(
      timeout(10000),
      catchError((response) => {
        console.log('Error request users');
        return _throw(response);
      })
    );
  }

}