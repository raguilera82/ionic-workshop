import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators/catchError';
import { concatMap } from 'rxjs/operators/concatMap';
import { map } from 'rxjs/operators/map';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { take } from 'rxjs/operators/take';
import { timeout } from 'rxjs/operators/timeout';

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
  }

  getUsersWithMoreInfo(): Observable<any[]> {
    return this.http.get('http://localhost:3001/api/public/users').pipe(
      mergeMap((users: Array<any>) => {
        if (users.length > 0) {
          return forkJoin(
            users.map((user: any) => {
              return this.http.get(`http://localhost:3001/api/public/users/${user.username}`).pipe(
                map((info: any) => {
                  user.info = info;
                  return user;
                })
              )
            })
          )
        }
        return of([]);
      }),
    )
  }

  getUsers(): Observable<any[]> {

    const users$ = this.http.get('http://localhost:3001/api/public/users').pipe(
      mergeMap((users: Array<any>) => from(users)),
      take(2),
      concatMap((user:any) => {
        console.log(user.login);
        return this.http.get(`http://localhost:3001/api/public/users/${user.username}`).pipe(
          map((info: any) => {
            user.info = info;
            return user;
          })
        )
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