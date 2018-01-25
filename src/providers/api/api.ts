import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { _throw } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators/catchError';
import { concatMap } from 'rxjs/operators/concatMap';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { timeout } from 'rxjs/operators/timeout';

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
  }

  getUsers(): Observable<any> {

    const users$ = this.http.get('https://api.github.com/users').pipe(
      mergeMap((users: Array<any>) => from(users)),
      concatMap((user:any) => {
        console.log(user.login);
        return this.http.get(`https://api.github.com/users/${user.login}`)
      }),
      timeout(10000),
      catchError((response) => {
        console.log('Error request users');
        return _throw(response);
      }) 
    );

    return users$;

  }

}