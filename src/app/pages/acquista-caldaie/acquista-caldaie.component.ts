import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PaginatorState } from 'primeng/paginator';
import { catchError, filter, finalize, switchMap, tap } from 'rxjs';
import { Caldaie } from 'src/app/Models/Caldaie';
import { MarcaCaldaie } from 'src/app/Models/MarcaCaldaie';
import { UtentiCaldaie } from 'src/app/Models/UtentiCaldaie';
import { CaldaieService } from 'src/app/Services/caldaie.service';
import { MarcheService } from 'src/app/Services/marche.service';
import { UtentiCaldaieService } from 'src/app/Services/utenti-caldaie.service';

@Component({
  selector: 'app-acquista-caldaie',
  templateUrl: './acquista-caldaie.component.html',
  styleUrls: ['./acquista-caldaie.component.less'],
  animations: [
    trigger('cardTransition', [
      state('left', style({
        'margin-left': '-600px',
        opacity: 0
      })),
      state('top', style({
        'margin-top': '-600px',
        opacity: 0
      })),
      state('right', style({
        'margin-right': '-600px',
        opacity: 0
      })),
      state('loaded', style({
        'margin': 0,
        opacity: 1
      })),
      transition('left => loaded', [
        animate('600ms ease-in')
      ]),
      transition('top => loaded', [
        animate('600ms ease-in')
      ]),
      transition('right => loaded', [
        animate('600ms ease-in')
      ]),
    ])
  ]
})
export class AcquistaCaldaieComponent {

  @Input() selectedMarca: MarcaCaldaie;
  public caldaieList: Caldaie[];
  public caldaieVisibleList: Caldaie[];
  public firstCaldaiaIdx: number;
  public loading: boolean;
  public displayContent: boolean;
  public menuItems: MenuItem[];

  constructor(
    private caldaieService: CaldaieService,
    private marcheService: MarcheService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
      this.checkRoutePattern();
  }

  public isOpen: boolean;
  public changeOpen() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }
  public items: MenuItem[] = [
    { label: 'Prova 1'},
    { label: 'adadfef 3'},
    { label: 'adad 1'}

  ]
  ngOnInit() {
    this.loading = true;
    this.caldaieList = [];

    const marcaId: number = this.activatedRoute.snapshot.params['id'];
    this.marcheService
      .getItemsFromItemId(marcaId)
      .pipe(
        tap(marca => this.selectedMarca = marca),
        tap(marca => this.marcheService.marcaId$.next(marca)),
        tap(marca => this.initMenu()),
        switchMap(marca =>
          this.marcheService.getCaldaieMarca(marca.id)
            .pipe(
              tap(caldaieList => caldaieList = [...caldaieList, ...caldaieList]),
              tap(caldaieList => this.caldaieList = [...caldaieList, ...caldaieList]),
              tap(() => {
                for(let i = 0; i < 3; i++) {
                  this.caldaieList.push(...this.caldaieList)
                }
              }),
              tap(() => this.caldaieVisibleList = this.caldaieList.slice(0, 9)),
              tap(() => this.firstCaldaiaIdx = 0),
              finalize(() => setTimeout( () => this.loading = false, 1500))
            )
        ),
        catchError(error => {
          console.error(error);
          this.router.navigate(['notfound']);
          return error;
        })
      )
      .subscribe()

    // this.marcheService.getCaldaieMarca(this.selectedMarca.id)
    //   .pipe(
    //     tap(caldaieList => caldaieList = [...caldaieList, ...caldaieList]),
    //     tap(caldaieList => this.caldaieList = [...caldaieList, ...caldaieList]),
    //     tap(() => {
    //       for(let i = 0; i < 3; i++) {
    //         this.caldaieList.push(...this.caldaieList)
    //       }
    //     }),
    //     tap(() => console.log(this.caldaieList)),
    //     tap(() => this.caldaieVisibleList = this.caldaieList.slice(0, 9)),
    //     tap(() => this.firstCaldaiaIdx = 0),
    //     tap(() => console.log(this.caldaieVisibleList)),
    //     finalize(() => setTimeout( () => this.loading = false, 1500))
    //   )
    //   .subscribe();
  }

  public splitCaldaieList(paginatorState: PaginatorState, paginatorTopBox: HTMLElement) {
    this.caldaieVisibleList = [];
    setTimeout(() => this.caldaieVisibleList = this.caldaieList.slice(paginatorState.first, paginatorState.first + paginatorState.rows), 200)
    this.firstCaldaiaIdx = paginatorState.first;
    paginatorTopBox.scrollTo();
  }

  public viewCaldaiaDetail(idxCaldaia: number) {
    const selectedCaldaia = this.caldaieVisibleList[idxCaldaia];
    this.router.navigate([`modelli/${selectedCaldaia.id}`], { relativeTo: this.activatedRoute, state: selectedCaldaia });
  }

  public checkRoutePattern() {
    this.router.events
    .pipe(
      tap((event: Event) => this.displayContent = !this.router.url.includes('modelli'))
    )
    .subscribe()
  }

  public initMenu() {
    this.menuItems = [
      { label: 'Marche', routerLink: '/marche' },
      { label: this.selectedMarca.nome },
    ]
  }

  public getAnimation(idxCard: number) {
    if(idxCard === 0 || idxCard % 3 === 0)
      return 'fadeinleft';
    else if(idxCard === 2 || (idxCard - 2) % 3 === 0)
      return 'fadeinright';
    return "";
  }
}
