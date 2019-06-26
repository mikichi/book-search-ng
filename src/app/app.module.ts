import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule, MatIconModule, MatListModule, MatToolbarModule } from "@angular/material";
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
    MatIconModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
