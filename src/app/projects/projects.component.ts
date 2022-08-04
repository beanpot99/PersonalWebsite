import { Component, OnInit } from '@angular/core';


@Component({
    selector:'app-projects',
    template:`
    <section class="hero is-fullheight is-default is-bold">
        <h1>Projects</h1>
    </section>
    `,
    styles: [`
    .hero{
        
      }
    `
    ]
})
export class ProjectsComponent implements OnInit {

    constructor() { }
  
    ngOnInit(): void {
    }
  
  }