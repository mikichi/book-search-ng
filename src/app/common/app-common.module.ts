import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from "ngx-toastr";
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";
import { GoogleBooksApiService } from "./http/http-services/books/google-books-api.service";
import { HttpInterceptorService } from "./http/http-interceptor.service";
import { AppToasterConfig } from "./constracts/app-toastr-config";
import { BookSearchService } from "./services/book-search.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot(AppToasterConfig),
    HttpClientModule,
    HttpClientXsrfModule,
  ],
  exports: []
})
export class AppCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppCommonModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpInterceptorService,
          multi: true,
        },

        GoogleBooksApiService,
        BookSearchService,
      ],
    };
  }
}
