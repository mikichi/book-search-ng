import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'book-search-box',
  templateUrl: './book-search-box.component.html',
  styleUrls: ['./book-search-box.component.scss']
})
export class BookSearchBoxComponent implements OnInit {

  constructor() { }

  searchBoxFormControl: FormControl;

  @Output()
  executeSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.searchBoxFormControl = new FormControl('');
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.executeSearch.emit(this.searchBoxFormControl.value);
    }
  }
}
