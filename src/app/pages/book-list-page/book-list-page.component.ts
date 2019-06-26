import { Component, OnInit } from '@angular/core';
import { GoogleBooksApiService } from "../../common/http/http-services/books/google-books-api.service";

@Component({
  selector: 'app-book-list-page',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.scss']
})
export class BookListPageComponent implements OnInit {

  constructor(private bookService: GoogleBooksApiService) {
  }

  query: string;

  ngOnInit() {
    this.bookService.fetchBooks({q: 'ティール組織'})
      .subscribe((res) => {
        this.query = JSON.stringify(res);
      });
  }

}
