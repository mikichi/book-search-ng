import { Injectable } from '@angular/core';
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export abstract class HttpAbstractService {

  protected abstract getUriBase(...arg: any[]): string;

  protected constructor() { }

  protected buildParams(query: any): HttpParams {
    return new HttpParams({ fromObject: query });
  }
}
