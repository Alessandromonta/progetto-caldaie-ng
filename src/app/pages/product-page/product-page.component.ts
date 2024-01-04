import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Injector, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { MarcaCaldaie } from 'src/app/Models/MarcaCaldaie';
import { MarcheService } from 'src/app/Services/marche.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.less'],
  // animations: [
  //   trigger('hoverCard', [
  //     state('hover', style({
  //       height: '10vh',
  //       'font-size': '28px',
  //       color: 'red'
  //     })),
  //     state('notHover', style({
  //       height: '6vh',
  //       'font-size': '18px',
  //     })),
  //     transition('notHover => hover', [
  //       animate('1s')
  //     ]),
  //     transition('hover => notHover', [
  //       animate('0.8s')
  //     ])
  //   ])
  // ]
})
export class ProductPageComponent implements OnInit {

  public marcheList: MarcaCaldaie[];
  public displayContent: boolean;

  constructor(
    private marcheService: MarcheService,
    private injector: Injector,
    private router: Router
  ) {
    this.checkRoutePattern()
  }

  ngOnInit(): void {
    this.marcheList = [];
    this.marcheService.getItems()
      .pipe(
        tap(res => console.log(res)),
        tap(marcheList => this.marcheList = marcheList)
      )
      .subscribe();    
  }

  public goToCaldaieList(selectedMarca: MarcaCaldaie) {
    this.injector.get(Router).navigate([selectedMarca.id], { relativeTo: this.injector.get(ActivatedRoute) })
  }

  public checkRoutePattern() {
    this.router.events
    .pipe(
      tap((event: any) => console.log(event)),

      filter((event: any) => event instanceof NavigationEnd),
      tap((event: any) => console.log(event)),
      tap((event: NavigationEnd) => this.displayContent = event.url === '/marche')
    )
    .subscribe()
  }
}
