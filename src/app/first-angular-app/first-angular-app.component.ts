import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-angular-app',
  template: `
    <p>
      first-angular-app works!
    </p>
  `,
  styleUrls: ['./first-angular-app.component.scss']
})
export class FirstAngularAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
