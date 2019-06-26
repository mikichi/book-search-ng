import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewPageComponent } from './book-view-page.component';

describe('BookViewPageComponent', () => {
  let component: BookViewPageComponent;
  let fixture: ComponentFixture<BookViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
