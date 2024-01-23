import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'progetto-caldaie-ng';

  constructor(
    private activatedRoute: ActivatedRoute,
    private faIconLibrary: FaIconLibrary
  ) {
    this.activatedRoute.params.subscribe(params => console.log(params));
    this.faIconLibrary.addIconPacks(fas, fab);

    document.addEventListener('scroll', (event) => {
      let desktopMenuBarElement = document.querySelector('.desktop-menu-bar');
      if(window.scrollY !== 0) {
        if(!desktopMenuBarElement.classList.contains('minimized-bar'))
          desktopMenuBarElement.classList.add('minimized-bar');
      }
      else {
        if(desktopMenuBarElement.classList.contains('minimized-bar'))
          desktopMenuBarElement.classList.remove('minimized-bar');
      }
    });
  }
}
