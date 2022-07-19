import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-contact-page></app-contact-page>
    <app-home></app-home>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class AppComponent {
  title = 'grace-personal-page';
}
