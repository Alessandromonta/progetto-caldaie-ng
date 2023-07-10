import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.less']
})
export class HeaderMenuComponent {

  constructor(
    private router: Router
  ) {}

  public items: MenuItem[] = [
    {
      label: "Elenco prodotti",
      routerLink: '/elenco-prodotti'
    },
    {
      label: "Acquista pacchetti",
      routerLink: '/elenco-pacchetti'
    },
    {
      label: "Profilo",
      routerLink: '/profilo-utente'
    },
    {
      label: "Login/Registrati",
      routerLink: '/login'
    },
  ]

  public onChangePage(event: MenuItem) {
    //this.router.navigate(['elenco-pacchetti'])
  }
}
