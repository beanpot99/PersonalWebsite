import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  template: `
       
	<section class="hero is-fullheight">
  <form (ngSubmit)="submitForm()">
		<div class="hero-body">
			<div class="container has-text-centered">
				<div class="columns is-8 is-variable ">
					<div class="column is-two-thirds has-text-left">
						<h1 class="title is-1">Contact Me</h1>
						<p class="is-size-4">Nice paragraph to come later</p>
		
					</div>
          
					<div class="column is-one-third has-text-left">
						<div class="field">
							<label class="label">Name</label>
							<div class="control">
								<input class="input is-medium" type="text" name="name" [(ngModel)]="name">
							</div>
						</div>
						<div class="field">
							<label class="label">Email</label>
							<div class="control">
								<input class="input is-medium" type="text" name="email" [(ngModel)]="email">
							</div>
						</div>
						<div class="field">
							<label class="label">Message</label>
							<div class="control">
								<textarea class="textarea is-medium" name="message" [(ngModel)]="message"></textarea>
							</div>
						</div>
						<div class="control">
							<button type="submit" class="button is-link is-fullwidth has-text-weight-medium is-medium">Send Message</button>
						</div>
            
					</div>
          
				</div>
			</div>
		</div>
    </form>
	</section>

  `,
  styles: [`
  
  `
  ]
})
export class ContactPageComponent implements OnInit {
name:string="";
email:string="";
message:string="";
  constructor() { }

  ngOnInit(){
    
  }
submitForm(){
  alert("I am submitting the form!");
}
}
