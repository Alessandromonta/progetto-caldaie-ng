import { Component, Input } from '@angular/core';
import { AccortezzaSostituzione } from 'src/app/Models/AccortezzaSostituzione';

@Component({
  selector: 'app-accortezza-view',
  templateUrl: './accortezza-view.component.html',
  styleUrl: './accortezza-view.component.less'
})
export class AccortezzaViewComponent {
  @Input() selectedItem: AccortezzaSostituzione;
}
