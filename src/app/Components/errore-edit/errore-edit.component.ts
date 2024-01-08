import { HttpRequest } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { cloneDeep } from 'lodash';
import { Observable, forkJoin, iif, switchMap, tap } from 'rxjs';
import { ErroriCaldaie } from 'src/app/Models/ErroriCaldaie';
import { SoluzioniErrori } from 'src/app/Models/SoluzioniErrori';
import { ErroriService } from 'src/app/Services/errori.service';
import { SoluzioniService } from 'src/app/Services/soluzioni.service';

@Component({
  selector: 'app-errore-edit',
  templateUrl: './errore-edit.component.html',
  styleUrl: './errore-edit.component.less'
})
export class ErroreEditComponent {

  @Output() emitErrore: EventEmitter<ErroriCaldaie> = new EventEmitter<ErroriCaldaie>();
  @Input() selectedErrore: ErroriCaldaie;
  public soluzioniErrore: SoluzioniErrori[] = [];
  public saving: boolean;

  constructor(
    private soluzioniService: SoluzioniService,
    private erroriService: ErroriService
  ) {}

  ngOnInit() {
    this.selectedErrore = cloneDeep(this.selectedErrore);

    if(this.selectedErrore.id) {
      this.soluzioniService
        .getSoluzioniErrore(this.selectedErrore.id)
        .pipe(
          tap(soluzioni => this.soluzioniErrore = soluzioni)
        )
        .subscribe();
    }
  }

  public saveOrUpdateData() {
    const httpCall =
      this.selectedErrore.id ?
        this.erroriService.updateItem(this.selectedErrore.id, this.selectedErrore) :
        this.erroriService.addItem(this.selectedErrore);

    let newSoluzioniCalls: Observable<SoluzioniErrori>[] = [];
    let updatedSoluzioniCalls: Observable<SoluzioniErrori>[] = [];
    this.soluzioniErrore.forEach(soluzione =>
      soluzione.id ?
        updatedSoluzioniCalls.push(this.soluzioniService.updateItem(soluzione.id, soluzione)) :
        newSoluzioniCalls.push(this.soluzioniService.addItem(soluzione))
    );
    console.log(this.selectedErrore)
    httpCall
      .pipe(
        tap(errore => console.log(errore)),
        tap(errore => this.emitErrore.emit(errore)),
        switchMap(() => forkJoin([...newSoluzioniCalls, ...updatedSoluzioniCalls]))
      )
      .subscribe();
  }

  public addSoluzione() {
    const soluzione = new SoluzioniErrori();
    soluzione.idErrore = this.selectedErrore.id;
    this.soluzioniErrore.push(soluzione);
  }
}
