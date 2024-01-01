import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { Caldaie } from 'src/app/Models/Caldaie';
import { MarcaCaldaie } from 'src/app/Models/MarcaCaldaie';
import { UtentiCaldaie } from 'src/app/Models/UtentiCaldaie';
import { CaldaieService } from 'src/app/Services/caldaie.service';
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
  public loading: boolean;

  constructor(
    private caldaieService: CaldaieService
  ) {}

  public isOpen: boolean;
  public changeOpen() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }

  ngOnInit() {
    this.loading = true;
    this.caldaieList = [];
    this.caldaieService.getItems()
      .pipe(
        tap(caldaieList => caldaieList = [...caldaieList, ...caldaieList]),
        tap(caldaieList => this.caldaieList = [...caldaieList, ...caldaieList]),
        tap(() => console.log(this.caldaieList)),
        finalize(() => setTimeout( () => this.loading = false, 1500))
      )
      .subscribe();
  }
}
