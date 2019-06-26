import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchBoxComponent } from './book-search-box.component';

describe('BookSearchBoxComponent', () => {
  let component: BookSearchBoxComponent;
  let fixture: ComponentFixture<BookSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
