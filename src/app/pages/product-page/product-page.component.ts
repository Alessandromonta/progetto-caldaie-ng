import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Injector, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
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

  constructor(
    private marcheService: MarcheService,
    private injector: Injector
  ) {}

  public marcheList: MarcaCaldaie[];
    public isOpen: boolean = false;
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
    console.log("Ciao")
    this.injector.get(Router).navigate([`marca/${selectedMarca.nome}`])
    this.ngOnDestroy()
  }

  ngOnDestroy() {

  }
}
