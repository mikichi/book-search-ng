import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  private readonly API_BASE_URL: string;

  constructor(private toastrService: ToastrService) {
    this.API_BASE_URL = 'api/';
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const request = req.clone({
        url: _.startsWith(req.url, 'https://')
                ? req.url // External API
                : this.API_BASE_URL + req.url, // Own API
        params: req.params,
      });
      return next.handle(request)
        .pipe(
          tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              return this.handleResponseSuccess(event);
            }
          }),
          catchError((err: any, caught: any) => {
            if (err instanceof HttpErrorResponse) {
              return this.handleResponseCatch(err);
            }
          }),
        );
  }

  /**
   * 正常時の処理
   */
  private handleResponseSuccess(httpResponse: HttpResponse<any>) {
    // TODO show error message form API.
    this.toastrService.success('リクエストが成功しました。');
  }

  /**
   * 例外時の処理
   */
  private handleResponseCatch(event: HttpErrorResponse): Observable<any> {
    // TODO show error message form API.
    this.toastrService.error('エラーが発生しました。');

    return throwError(event);
  }
}
