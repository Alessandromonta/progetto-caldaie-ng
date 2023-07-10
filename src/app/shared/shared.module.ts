import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { HeaderMenuComponent } from '../components/header-menu/header-menu.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderMenuComponent
  ],
  imports: [
    FontAwesomeModule,
    InputTextModule,
    PasswordModule,
    RippleModule,
    TabMenuModule,
  ],
  exports: [
    FontAwesomeModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RippleModule,
    TabMenuModule,
    HeaderMenuComponent
  ]
})
export class SharedModule { }
