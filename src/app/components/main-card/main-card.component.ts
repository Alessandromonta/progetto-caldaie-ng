import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErroriCaldaie } from 'src/app/Models/ErroriCaldaie';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.less']
})
export class MainCardComponent implements OnInit{
  constructor(private http: HttpClient) { }

  private url: string = 'https://localhost:7086/api/ErroriCaldaie'

  public errori: ErroriCaldaie[] = []
  public panelOpenState: boolean[] = [];
  
  ngOnInit(){
  }
}
