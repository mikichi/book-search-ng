import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule, MatToolbarModule } from "@angular/material";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpInterceptorService } from "./common/http/http-interceptor.service";
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { BookViewPageComponent } from './pages/book-view-page/book-view-page.component';
import { AppCommonModule } from "./common/app-common.module";

@NgModule({
  declarations: [
    AppComponent,
    BookListPageComponent,
    BookViewPageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppCommonModule.forRoot(),
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
