import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class AuthProvider {

  constructor() {
    console.log('Hello AuthProvider Provider');
  }

  getLoginIn(): Observable<boolean> {
    return of(false);
  }

}
