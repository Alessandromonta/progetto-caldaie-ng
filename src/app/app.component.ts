import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'progetto-caldaie-ng';
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => console.log(params))
  }
}
