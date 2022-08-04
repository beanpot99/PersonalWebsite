import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '', 
   component: HomeComponent
  },
  {path:'contact',
  component: ContactPageComponent
},
{path:'aboutMe',
component: AboutMeComponent
},
{path:'projects',
component: ProjectsComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
