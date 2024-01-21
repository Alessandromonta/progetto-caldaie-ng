import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.less'
})
export class AuthComponent implements OnInit{

  public signupFlag: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.activatedRoute.data
      .pipe(
        tap(data => this.signupFlag = data['signupFlag'])
      )
      .subscribe();
  }
}
