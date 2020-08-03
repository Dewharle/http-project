import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-test',
  template: `
  <ul *ngFor="let api of apis"> 
      <li>{{api.id| json}} {{api.title}} {{api.body}}</li>
  </ul>
  {{error | json}}
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public apis: any = [];
  error: any;

  constructor(private testService: TestService) { }

  
  ngOnInit(): void {
    this.testService.getAPI()
         .subscribe(data => this.apis = data, 
          error => this.error = error);
  }

}
