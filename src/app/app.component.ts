import { Component } from '@angular/core';
import { BookSearchService } from "./common/services/book-search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private bookSearch: BookSearchService) {
  }


  onExecuteSearch(text: string) {
    this.bookSearch.bookSearch$.next(text);
  }
}
