import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item"></a>
        MY LOGO GOES HERE
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'grace-personal-page';
}
