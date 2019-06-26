import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpAbstractService } from "../http-abstract.service";
import { Observable } from "rxjs";
import { GoogleBook } from "../../../models/google-book";
import { map } from "rxjs/operators";

/**
 * @see https://developers.google.com/books/docs/v1/using#query-params
 */
export class GoogleBooksAPIQueryParams {
  /* Full-text query string. */
  q: string;
}

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksApiService extends HttpAbstractService {
  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Google Books API v1
   * @see https://developers.google.com/books/docs/v1/getting_started
   */
  protected getUriBase(...arg: any[]): string {
    return 'https://www.googleapis.com/books/v1';
  }

  /**
   * Googleに登録されている書籍情報から取得
   */
  private get volumeApi(): string {
    return `${this.getUriBase()}/volumes`;
  }

  /**
   * ユーザーの本棚から取得
   * @deprecated 未実装
   */
  private get bookshelvesApi(): string {
    return `${this.getUriBase()}/volumes`;
  }

  fetchBooks(params: GoogleBooksAPIQueryParams): Observable<GoogleBook[]> {
    return this.http.get(this.volumeApi, {params: this.buildParams(params)})
      .pipe(
        map((res: any) => res.items),
      );
  }
}
