import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {
  items: MenuItem[] = [
    {
      label: 'Account',
      items: [{
        label: 'dilloallamamma'
      },
      {
        label: 'dilloallavvocato'
      }]
    },
    {
      label: 'Login'  
    },
    ]

}
