import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

/**
 * TODO NgRx, Akitaなどの状態遷移機構を整える。
 */
@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  constructor() { }

  bookSearch$: BehaviorSubject<string> = new BehaviorSubject('');
}
