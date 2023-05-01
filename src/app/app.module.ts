import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// only Angular material import Start

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
// import {MatCardModule} from '@angular/material/card';
// import {MatInputModule} from '@angular/material/input';
// only Angular material import Ends

import { AppRoutingModule } from './app-routing.module';

// Compoents imnportign Start
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { AboutPteComponent } from './user/about-pte/about-pte.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { BlogPteComponent } from './user/blog-pte/blog-pte.component';
import { HomePageComponent } from './user/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterService } from './Service/master.service';
import { HttpClientModule } from '@angular/common/http';

// import { RestModule } from './rest/rest.module';
// Compoents imnportign Ends

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AboutPteComponent,
    ContactUsComponent,
    BlogPteComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    NgbModule,
    FormsModule,
    // BrowserModule,
    // AppRoutingModule,
    // RestModule,
    HttpClientModule,
    // FormModule
    // MatCardModule,
    // MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
