import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './user/home-page/home-page.component';
import { AboutPteComponent } from './user/about-pte/about-pte.component';
import { BlogPteComponent } from './user/blog-pte/blog-pte.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';






const routes: Routes = [
  {path:'' , component:HomePageComponent},
  {path:'about' , component:AboutPteComponent},
  {path:'blogs' , component:BlogPteComponent},
  {path:'blogs' , component:ContactUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
