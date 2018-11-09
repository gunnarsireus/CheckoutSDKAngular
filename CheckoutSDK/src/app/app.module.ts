import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineComponent } from './inline/inline.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ModalComponent } from './modal/modal.component';
import { RedirectWindowComponent } from './redirect-window/redirect-window.component';


const routes : Routes = [
  {path: 'redirect', component:RedirectComponent},
  {path: 'modal', component:ModalComponent},
  {path: 'inline', component:InlineComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    InlineComponent,
    RedirectComponent,
    ModalComponent,
    RedirectWindowComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( 
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
