import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlipkartService } from './flipkart.service';
import { MiddleComponent } from './middle/middle.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Data } from './data';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component'
const routes =[
  {
    path:'',
    component:MiddleComponent
  },
  {
    path:'Checkout',
    component:CheckoutComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleComponent,
    CheckoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FlipkartService,Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
