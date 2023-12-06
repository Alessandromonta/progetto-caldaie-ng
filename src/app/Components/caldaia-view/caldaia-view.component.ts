import { Component, Input } from '@angular/core';
import { Caldaie } from 'src/app/Models/Caldaie';

@Component({
  selector: 'app-caldaia-view',
  templateUrl: './caldaia-view.component.html',
  styleUrls: ['./caldaia-view.component.less']
})
export class CaldaiaViewComponent {

  @Input() selectedCaldaia: Caldaie;
}
