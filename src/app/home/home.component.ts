import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   <section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h2 class="title" id="welcome">
        Grace M Thompson
      </h2>
    </div>
  </div>
</section>
  `,
  styles: [
    `
    .hero{
      background-image: url('/assets/images/5291450.jpg') !important;
      background-size:cover;
      background-position: center center;
    }
    #welcome{
      color: #000042;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
