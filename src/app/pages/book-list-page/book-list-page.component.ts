import { Component, OnDestroy, OnInit } from '@angular/core';
import { GoogleBooksApiService } from "../../common/http/http-services/books/google-books-api.service";
import { BehaviorSubject, Subscription } from "rxjs";
import { GoogleBook } from "../../common/models/google-book";
import { BookSearchService } from "../../common/services/book-search.service";

@Component({
  selector: 'app-book-list-page',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.scss']
})
export class BookListPageComponent implements OnInit, OnDestroy {

  constructor(private bookService: GoogleBooksApiService,
              private bookSearch: BookSearchService) {
  }

  books$: BehaviorSubject<GoogleBook[]> = new BehaviorSubject([]);

  private subscription: Subscription = new Subscription();

  ngOnInit() {
    /**
     * 検索実行を購読
     */
    this.subscription.add(this.bookSearch.bookSearch$.subscribe((text) => {
      if (!text) {
        return;
      }
      this.bookService.fetchBooks({q: text})
        .subscribe((res) => {
          this.books$.next(res);
        });
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
