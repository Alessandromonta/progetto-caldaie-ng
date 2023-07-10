import { Component } from '@angular/core';
import { Package } from 'src/app/Models/package';
import { IconDefinition, faGripfire } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.less']
})
export class PackagesListComponent {
  public packages: Package[] = null;
  public fireIcon: IconDefinition = null;
  ngOnInit() {
    this.packages = [
      {
        title: "Singola caldaia",
        releases: [
          "-Risoluzione a tutti i guasti di una singola caldaia a scelta"
        ],
        price: 14.99
      },
      {
        title: 'Pacchetto "Singola caldaia"',
        releases: [
          "-Risoluzione a tutti i guasti di una singola caldaia e scelta",
          "-Pacchetto individuazione guasti",
          "-Pacchetto accortezze per la sostituzione"
        ],
        price: 29.98,
        newprice: 19.99
      },
      {
        title: 'Pacchetto "Friends"',
        releases: [
          "-Risoluzione a tutti i guasti di 3 caldaie a scelta",
          "-Pacchetto individuazione guasti",
          "-Pacchetto accortezze per la sostituzione"
        ],
        price: 59.96,
        newprice: 29.99
      },
      {
        title: 'Pacchetto "Risolutore"',
        releases: [
          "-Pacchetto individuazione guasti",
          "-Pacchetto accortezze per la sostituzione"
        ],
        price: 14.99
      },
      {
        title: 'Pacchetto "Exclusive"',
        releases: [
          "-Risoluzione a tutti i guasti di tutte le caldaie di una marca a scelta",
          "-Pacchetto individuazione guasti",
          "-Pacchetto accortezze per la sostituzione​"
        ],
        price: 49.99
      },
      {
        title: 'Pacchetto "All-in"',
        releases: [
          "-Risoluzione a tutti i guasti di tutte le caldaie di ogni marca",
          "-Pacchetto accortezze per la sostituzione",
          "-Pacchetto accortezze per la sostituzione"
        ],
        price: 99.99
      }
    ];

    this.fireIcon = faGripfire;
  }

}
