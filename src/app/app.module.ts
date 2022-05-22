import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//https://malcoded.com/posts/angular-fundamentals-modules/
//https://www.digitalocean.com/community/tutorials/angular-lazy-loading
//https://andrewhalil.com/2021/09/21/how-to-modularize-angular-application-components/
//https://medium.com/@shijin_nath/angular-right-file-structure-and-best-practices-that-help-to-scale-2020-52ce8d967df5
//https://www.tektutorialshub.com/angular/angular-folder-structure-best-practices/