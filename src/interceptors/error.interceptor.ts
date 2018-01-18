import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private events: Events){}

    intercept(req: HttpRequest<any>, 
        next: HttpHandler): Observable<HttpEvent<any>> {
    
        return next
          .handle(req).pipe(
            catchError((response: any) => {
              if (response instanceof HttpErrorResponse) {
                console.log('response in the catch: ', response);
                this.events.publish('show:error', {dataerror: response.message})
              }
              return _throw(response);
              })
          );
      }
    
}