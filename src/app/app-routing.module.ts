import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPteComponent } from '../app/User/about-pte/about-pte.component';
import { BlogPteComponent } from '../app/User/blog-pte/blog-pte.component';
import { ContactUsComponent } from '../app/User/contact-us/contact-us.component';
import { HomePageComponent } from '../app/User/home-page/home-page.component';



const routes: Routes = [
  {path:'' , component:HomePageComponent},
  {path:'pteiseasy' , component:HomePageComponent},
  {path:'about' , component:AboutPteComponent},
  {path:'contact-us' , component:ContactUsComponent},
  {path:'blogs' , component:BlogPteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
