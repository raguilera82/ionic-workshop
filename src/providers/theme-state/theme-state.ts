import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


export class ThemeStateProvider {

  private theme: BehaviorSubject<string>;

  constructor() {
    this.theme = new BehaviorSubject('dark-theme');
  }

  setActiveTheme(themeActive) {
    this.theme.next(themeActive);
  }

  getActiveTheme(): Observable<string> {
    return this.theme.asObservable();
  }

}
