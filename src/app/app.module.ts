import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { MainCardComponent } from './components/main-card/main-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule, } from '@angular/material/expansion';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { HttpClientModule } from '@angular/common/http';
 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    HttpClientModule,
    ButtonModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    NoopAnimationsModule,
    MatDividerModule,
    OverlayPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
