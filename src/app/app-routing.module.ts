import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPteComponent } from './user/about-pte/about-pte.component';
import { BlogPteComponent } from './user/blog-pte/blog-pte.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { HomePageComponent } from './user/home-page/home-page.component';
import { WelcomeComponent } from './User/welcome/welcome.component';


const routes: Routes = [
  // {path:'' , component:HomePageComponent},
  {path:'pteiseasy' , component:HomePageComponent},
  // { path: '',   redirectTo: '/pteiseasy', pathMatch: 'full' },
  {path:'about' , component:AboutPteComponent},
  {path:'contact-us' , component:ContactUsComponent},
  {path:'blogs' , component:BlogPteComponent},
  {path:'' , component:WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
