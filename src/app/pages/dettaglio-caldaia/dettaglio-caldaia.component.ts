import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { catchError, switchMap, take, tap } from 'rxjs';
import { Caldaie } from 'src/app/Models/Caldaie';
import { ErroriCaldaie } from 'src/app/Models/ErroriCaldaie';
import { MarcaCaldaie } from 'src/app/Models/MarcaCaldaie';
import { CaldaieService } from 'src/app/Services/caldaie.service';
import { ErroriService } from 'src/app/Services/errori.service';
import { MarcheService } from 'src/app/Services/marche.service';

@Component({
  selector: 'app-dettaglio-caldaia',
  templateUrl: './dettaglio-caldaia.component.html',
  styleUrl: './dettaglio-caldaia.component.less'
})
export class DettaglioCaldaiaComponent {

  public selectedCaldaia: Caldaie;
  public errori: ErroriCaldaie[];
  public menuItems: MenuItem[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private erroriService: ErroriService,
    private caldaieService: CaldaieService,
    private marcheService: MarcheService
  ) {
    // this.selectedCaldaia = this.router.getCurrentNavigation().extras.state as Caldaie;
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => console.log(params));
    this.errori = [];

    console.log(this.activatedRoute.snapshot.params)
    const caldaiaId: number = this.activatedRoute.snapshot.params['id'];
    this.caldaieService
      .getItemsFromItemId(caldaiaId)
      .pipe(
        tap((caldaia: Caldaie) => this.selectedCaldaia = caldaia),
        tap(caldaia => this.initMenu()),
        switchMap( caldaia => 
            this.erroriService
              .getErroriCaldaia(this.selectedCaldaia.id)
        ),
        tap(errori => this.errori = errori),
        catchError(error => {
          console.error(error);
          this.router.navigate(['notfound']);
          return error;
        })
      )
      .subscribe();
    // this.erroriService
    //   .getErroriCaldaia(this.selectedCaldaia.id)
    //   .pipe(
    //     tap(errori => this.errori = errori),
    //     catchError(error => {
    //       console.error(error);
    //       this.router.navigate(['notfound']);
    //       return error;
    //     })
    //     //tap(() => this.errori = [...this.errori, ...this.errori])
    //   )
    //   .subscribe()
  }

  public initMenu() {
    let selectedMarca: MarcaCaldaie;
    this.marcheService.marcaId$
      .asObservable()
      .pipe(
        take(1),
        tap(marca => selectedMarca = marca),
        tap(() => {
          this.menuItems = [
            { label: 'Marche', routerLink: '/marche' },
            { label: selectedMarca.nome, routerLink: `/marche/${selectedMarca.id}` },
            { label: this.selectedCaldaia.nome }
          ]
        })
      )
      .subscribe();
  }
}
