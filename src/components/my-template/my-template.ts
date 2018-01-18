import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the MyTemplateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-template',
  template: '<div [innerHtml]="myTemplate"></div>'
})
export class MyTemplateComponent implements OnInit {

  @Input() urlpath: string;
  myTemplate: string = "";

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.urlpath, {responseType: 'text'}).subscribe(
      (data: string) => {
        this.myTemplate = data;
      }
    )
  }

}
