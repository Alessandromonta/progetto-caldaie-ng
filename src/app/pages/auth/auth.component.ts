import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  public registerFlag: boolean = false;

  ngOnInit() {
  }
}
