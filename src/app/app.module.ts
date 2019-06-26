import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from "@angular/material";
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { BookViewPageComponent } from './pages/book-view-page/book-view-page.component';
import { AppCommonModule } from "./common/app-common.module";
import { BookSearchBoxComponent } from './units/book-search-box/book-search-box.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BookListPageComponent,
    BookViewPageComponent,
    BookSearchBoxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppCommonModule.forRoot(),

    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
