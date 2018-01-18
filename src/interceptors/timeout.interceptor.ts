import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { _throw } from 'rxjs/observable/throw';
import { timeoutWith } from 'rxjs/operators/timeoutWith';

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {

    constructor(private events: Events){}

    intercept(req: HttpRequest<any>, 
        next: HttpHandler): Observable<HttpEvent<any>> {
    
        return next
          .handle(req).pipe(
            timeoutWith(10000, defer(() => _throw(this.events.publish('show:error', {dataerror: 'Error de timeout'}))))
          );
      }
    
}