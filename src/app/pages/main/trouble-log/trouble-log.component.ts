import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: ` <router-outlet></router-outlet> `,
})
export class TroubleLogComponent {
  title = 'Bustracker admin';
}
