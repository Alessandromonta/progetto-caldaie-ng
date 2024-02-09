import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Component, Injector, Renderer2, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { filter, switchMap, take, tap } from 'rxjs';
import { AuthService } from './Auth/Service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private injector: Injector,
    private faIconLibrary: FaIconLibrary,
    public authService: AuthService,
    private _snackBar: MatSnackBar
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
    this.injector.get(Renderer2).addClass(document.body, 'background');
    if(localStorage.getItem('bearerToken'))
      this.injector.get(AuthService).utenteLoggato = JSON.parse(localStorage.getItem('userData'));
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
        tap(event => {
          if(event instanceof RoutesRecognized)
            this.checkRouteData(event.state.root);
        }),
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
        })
      )
      .subscribe();
  }

  public logout(): void {

    this.authService.logout()
      .pipe(
        tap((data) => {
          let removeToken = localStorage.removeItem('bearerToken');

          if (this.authService.getToken == null) {
            this.router.navigate(['/']);
            console.log("token removed");
            delete this.authService.utenteLoggato;
            this.openSnackBar("Logout effettuato con successo", "Ok")
          }
        })
      )
      .subscribe({
        error: (error) => {
          console.error('Errore durante il logout', error);
        }
      });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }

  public checkRouteData(routeChild: ActivatedRouteSnapshot): void {
    if(routeChild.children?.[0])
      this.checkRouteData(routeChild.children[0]);
    else {
      if(routeChild.data?.['notFullBackground'])
        this.injector.get(Renderer2).removeClass(document.body, 'background');
      else
        this.injector.get(Renderer2).addClass(document.body, 'background');
    }
  }
}
