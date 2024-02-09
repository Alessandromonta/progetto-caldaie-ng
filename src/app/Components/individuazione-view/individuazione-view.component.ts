import { Component, Input } from '@angular/core';
import { SoluzioneIndividuazioneGuasto } from 'src/app/Models/SoluzioneIndividuazione';

@Component({
  selector: 'app-individuazione-view',
  templateUrl: './individuazione-view.component.html',
  styleUrls: ['./individuazione-view.component.less']
})
export class IndividuazioneViewComponent {

  @Input() selectedItem: SoluzioneIndividuazioneGuasto;
}
