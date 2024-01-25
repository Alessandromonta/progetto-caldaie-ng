import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Component, Injector } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { filter, switchMap, take, tap } from 'rxjs';
import { AuthService } from './Auth/Service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'progetto-caldaie-ng';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private injector: Injector,
    private faIconLibrary: FaIconLibrary
  ) {
    this.activatedRoute.params.subscribe(params => console.log(params));
    this.faIconLibrary.addIconPacks(fas, fab);

    document.addEventListener('scroll', (event) => {
      let desktopMenuBarElement = document.querySelector('.desktop-menu-bar');
      if(window.scrollY !== 0) {
        if(!desktopMenuBarElement.classList.contains('minimized-bar'))
          desktopMenuBarElement.classList.add('minimized-bar');
      }
      else {
        if(desktopMenuBarElement.classList.contains('minimized-bar'))
          desktopMenuBarElement.classList.remove('minimized-bar');
      }
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('bearerToken')) {
      this.injector.get(AuthService).utenteLoggato = JSON.parse(localStorage.getItem('userData'));
      this.router.navigate(['profilo']);
    } else {
      this.router.navigate(['login']);
    }
  }

  ngAfterContentChecked(): void {
    this.checkRoutePattern();
  }

  public navigateToHome() {
    window.location.href = "https://www.autoclimarepair.it/";
  }

  public checkRoutePattern() {
    this.injector.get(Router)
      .events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        tap((navigationEnd: NavigationEnd) => {
          const menuElement = document.querySelector('.desktop-menu-bar');
          if(navigationEnd.url.includes('/area-riservata')) {
            if(!menuElement.classList.contains('area-riservata-menu'))
              menuElement.classList.add('area-riservata-menu');
          } else {
            if(menuElement.classList.contains('area-riservata-menu'))
              menuElement.classList.remove('area-riservata-menu');
          }
        }),
        tap(res => console.log(res))
      )
      .subscribe();
  }
}
