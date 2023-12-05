import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { MarcaCaldaie } from 'src/app/Models/MarcaCaldaie';
import { MarcheService } from 'src/app/Services/marche.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.less'],
  animations: [
    trigger('hoverCard', [
      state('hover', style({
        height: '10vh',
        'font-size': '28px',
        color: 'red'
      })),
      state('notHover', style({
        height: '6vh',
        'font-size': '18px',
      })),
      transition('notHover => hover', [
        animate('1s 2500ms ease-in')
      ]),
      transition('hover => notHover', [
        animate('0.8s ease-in')
      ])
    ])
  ]
})
export class ProductPageComponent implements OnInit {

  constructor(
    private marcheService: MarcheService
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
}
