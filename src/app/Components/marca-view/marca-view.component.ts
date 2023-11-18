import { Component, Input } from '@angular/core';
import { MarcaCaldaie } from 'src/app/Models/MarcaCaldaie';

@Component({
  selector: 'app-marca-view',
  templateUrl: './marca-view.component.html',
  styleUrls: ['./marca-view.component.less']
})
export class MarcaViewComponent {

  @Input() selectedMarca: MarcaCaldaie;
}
