import { Component, OnInit } from '@angular/core';


@Component({
    selector:'app-aboutMe',
    template:`
    <section class="hero is-fullheight is-default is-bold">
        <div class="hero-body">
            <div class=""container has-text-centered>
                <div class="column ">
                        <img src="/assets/images/headshot.jpg">
                </div>
                <div class="column is-6 is-offset-1">
                    <h1 class="title is-2">
                        About Me
                    </h1>
                </div>
            </div>
        </div>
    </section>
    `,
    styles: [`
    .hero{
        
      }
    `
    ]
})
export class AboutMeComponent implements OnInit {

    constructor() { }
  
    ngOnInit(): void {
    }
  
  }